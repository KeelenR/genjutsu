import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table'
import Pagination from './Pagination';

class List extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isloading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1    
        };

        const methods = [
            'handlePaginationClick'
        ]

        methods.forEach(method => (this[method] = this[method].bind(this)));
    }

    componentDidMount() {
        this._fetchCurrencies();
        }
        
    _fetchCurrencies() {
        this.setState({isloading: true});
        const { page } = this.state

        fetch(`${API_URL}/cryptocurrencies?page=${page}`)
            .then(handleResponse)
            .then((data) => {
                const { currencies, totalPages} = data
                this.setState({
                    currencies, 
                    totalPages,
                    isloading: false
                })
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    isloading: false
                })
            });
    }    

    handlePaginationClick(direction) {
        let nextPage = this.state.page;

        // Increment next page when direction is equal to next, otherwise decrement;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

        this.setState({page: nextPage}, () => {
            // get currencies once state has been set
            this._fetchCurrencies();
        })
    }

    render() {
        const { isloading, currencies, error, page, totalPages } = this.state
        const handlePaginationClick = this.handlePaginationClick;

        if (isloading) {
           return <div className="loading-container"><Loading /></div>
        }

        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div>
                <Table 
                currencies={currencies}
                />

                <Pagination
                page={page}
                totalPages={totalPages}
                handlePaginationClick={handlePaginationClick}
                 />
            </div>
        );
    }
}
export default List