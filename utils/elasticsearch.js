// const elasticsearch = require('@elastic/elasticsearch');


// // https://my-deployment-c63fa3.ent.asia-south1.gcp.elastic-cloud.com
// const esClient = new elasticsearch.Client({
//     host: 'https://my-deployment-c63fa3.ent.asia-south1.gcp.elastic-cloud.com',
//     auth: {
//         username: 'elastic',
//         password: 'changeme'
//     }
    

// });

// const AddDocument = async (body) => {
//     try {
//         const result = await esClient.index(body);
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// }
// const GetDocument = async (body) => {
//     try {
//         const result = await esClient.get(body);
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// }
// const DeleteDocument = async (body) => {
//     try {
//         const result = await esClient.delete(body);
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// }
// const UpdateDocument = async (body) => {
//     try {
//         const result = await esClient.update(body);
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// }
// const SearchDocument = async (body) => {
//     try {
//         const result = await esClient.search(body);
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// }

// AddDocument({
//     index: 'employee',
//     body: {
//         name: 'John Doe',
//         age: 30,
//         title: 'Software Engineer',
//         join_date: '2019-01-01',
//     }
// }).then(console.log).catch(console.error);

// module.exports = {
//     AddDocument,
//     GetDocument,
//     DeleteDocument,
//     UpdateDocument,
//     SearchDocument
// }
