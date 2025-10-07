import { Works } from '../data/works.js';
export const getWorks = () => {
    const results = Works;
    console.log('results', results);
    // results.push(
    //     {
    //         title: 'Traffic Girl Wars',
    //         description: ' ',
    //         form: Form.enum.novel,
    //         wordCount: 60000,
    //         pageCount: 200,
    //         genre: Genre.literary
    //     }
    // )
    return results;
};
