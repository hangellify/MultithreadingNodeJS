# Documentation: Multi-threading in Node.js with bcrypt

This documentation outlines an experiment to demonstrate the usage of multi-threading in Node.js using the bcrypt library for encryption operations. The experiment highlights how asynchronous operations can leverage Node.js's multi-threading capabilities to improve application performance.

## Introduction

Node.js is a popular runtime environment for building scalable and high-performance applications. While Node.js operates on a single-threaded event loop model, it utilizes multi-threading for certain asynchronous operations, such as file system I/O, network I/O, and cryptographic functions like bcrypt.

Bcrypt is a widely-used library for secure password hashing. By leveraging bcrypt, we can compare the performance of synchronous and asynchronous encryption operations and observe how Node.js utilizes multi-threading to optimize asynchronous tasks.

## Experiment Overview

- **Objective**: Compare the performance of synchronous and asynchronous bcrypt encryption operations in a Node.js environment.
- **Tools**: Node.js, Express.js, bcrypt
- **Approach**: Implement two endpoints in an Express.js application to perform synchronous and asynchronous encryption operations using bcrypt. Measure the execution time of each operation to analyze performance differences.

## Implementation

1. **Setup Project Structure**:
   
   - Create a new Node.js project.
   - Install necessary dependencies including `bcrypt` and `express`.

2. **Define Constants**:
   
   - Define constants for the password to be encrypted and the number of salt rounds in a separate file (e.g., `constants.js`).

3. **Implement Encryption Functions**:

   - Create asynchronous and synchronous encryption functions using bcrypt.
   - Concatenate the password with a timestamp to create unique variations for encryption.

4. **Setup Express Routes**:
   
   - Implement routes in an Express.js application to expose endpoints for performing synchronous and asynchronous encryption operations.
   - Measure the execution time of each operation.

5. **Configure Thread Pool**:
   
   - Set the `UV_THREADPOOL_SIZE` environment variable to control the size of the thread pool, allowing Node.js to utilize multiple threads for asynchronous operations.

6. **How to Run and Test**

    Follow these steps to clone the repository, install dependencies, run the server, and execute requests to compare execution times:

    1. **Clone the Repository:**
    
        ```bash
        git clone <repository-url>
        ```

    2. **Install Dependencies:**
    
        Navigate to the project directory and install dependencies using npm:
    
        ```bash
        cd <project-directory>
        npm install
        ```

    3. **Run the Server:**
    
        Start the development server using npm:
    
        ```bash
        npm run dev
        ```

    4. **Execute Asynchronous Request:**
    
        Use curl to send a request to the asynchronous endpoint:
    
        ```bash
        curl http://localhost:3000/example/async
        ```

    5. **Execute Synchronous Request:**
    
        Use curl to send a request to the synchronous endpoint:
    
        ```bash
        curl http://localhost:3000/example/sync
        ```

    6. **Compare Execution Times:**
    
        Compare the final execution times obtained from both asynchronous and synchronous requests to observe the performance differences.

    Ensure that you have curl installed on your system to execute HTTP requests from the command line. Analyze the execution times to understand the performance characteristics of synchronous and asynchronous operations in your Node.js application.


## Conclusion

Through this experiment, we aim to demonstrate how Node.js leverages multi-threading for asynchronous operations, such as bcrypt encryption. By comparing synchronous and asynchronous encryption operations, developers can gain insights into optimizing performance-critical tasks in Node.js applications. 
In attempting to comprehend the control over multi-threading in Node.js, it became evident that setting `UV_THREADPOOL_SIZE` to 1 may not strictly limit Node.js to a single thread under certain circumstances. Despite efforts to control thread allocation, Node.js internally manages the thread pool and might allocate additional threads, particularly when handling concurrent asynchronous operations. This dynamic adjustment of thread allocation is influenced by the workload and available system resources, rendering complete control over multi-threading challenging to achieve in practice.

## Additional Considerations

- **Resource Management**: Monitor system resources to ensure efficient utilization, especially in scenarios with high concurrency.
- **Error Handling**: Implement robust error handling mechanisms for asynchronous operations to prevent application crashes and ensure data integrity.

## Further Reading

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [bcrypt.js Documentation](https://www.npmjs.com/package/bcryptjs)
- [Express.js Documentation](https://expressjs.com/)

## Contributors

- hangelify

Feel free to contribute to this experiment by submitting pull requests or suggesting improvements. Happy coding!
