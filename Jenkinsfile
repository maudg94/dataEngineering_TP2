pipeline{
    agent any
    stages{
        stage('docker Build'){
            steps{
                echo "test"
                bat "docker build -t nodedockerimage ."
                bat "docker run -p 3000:3000 nodedockerimage"
            }
        }
    }
}