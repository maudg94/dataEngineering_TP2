pipeline{
    agent any
    stages{
        stage('Pull') {
            steps {
                git([url:'https://github.com/maudg94/dataEngineering_TP2.git', branch:'dev'])
            }
        } 
        stage('run test'){
            steps{
                bat "cd front/my-app"
                bat "npm run start"
                bat "npm run e2e"
            }
        }
        stage('docker Build'){
            steps{
                bat "docker-compose up"
            }
        }
    
    }
}