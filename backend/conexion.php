<?php


class Conexion{

    private $host;
    private $dbname;
    private $user;
    private $password;
    private $charset;


    public function __construct(){
        $this->host     = 'localhost';
        $this->dbname   = 'rest';
        $this->user     = 'root';
        $this->password = '';
        $this->charset  = 'utf8mb4';
    }

    public function connect(){
        try{

            $conexion ="mysql:host=".$this->host.";dbname=".$this->dbname.";charset:".$this->charset;

            $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_EMULATE_PREPARES => false];

            $pdo = new PDO($conexion,$this->user,$this->password,$options);

            return $pdo;

        }catch(PDOException $e){

            print_r("Erro conexion... ".$e->getMessage());

        }
    }

}


?>