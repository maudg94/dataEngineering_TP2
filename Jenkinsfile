pipeline{
    agent any
    stages{
        stage('Pull') {
            steps {
                git([url:'https://github.com/maudg94/dataEngineering_TP2.git', branch:'dev'])
            }
        } 
        stage('docker Build'){
            steps{
                bat "docker-compose up -d --build"
            }
        }
        stage('run test'){
            steps{
                bat "cd front/my-app && npm install && npm run e2e"
            }
        }
    }
}