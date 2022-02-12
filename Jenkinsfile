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
        stage('run e2e test'){
            steps{
                bat "cd front/my-app && dir && npm run e2e"
            }
        }
    }
}