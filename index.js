//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
    const reqpath = path.resolve("users.json")
    try {
        const users = await fs.readFile(reqpath, "utf8")
        console.log(users)
    } catch (error) {
        console.log(error)
    }
};

const writeHelloWorld = async () => {
    //Escribir hello world! en el archivo hello.txt
    const reqpath = path.resolve("hello.txt")
    try {
        await fs.writeFile(reqpath, "hello world!")
    } catch (error) {
        console.log(error)
    }

};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    const reqpath = path.resolve("users.json");
    try {
        let users = await fs.readFile(reqpath, "utf8");
        const usersObj = JSON.parse(users); //Convierte de JSON a objeto
        usersObj.push(username);
        await fs.writeFile(reqpath, JSON.stringify(usersObj)); //convierte de objeto a string
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
