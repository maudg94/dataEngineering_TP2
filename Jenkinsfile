pipeline{
    agent any
    stages{
        when{
            expression {
                return env.BRANCH_NAME == 'dev'
            }
        }
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
                bat "cd front/my-app && dir && npm install && npm run e2e"
            }
        }
    }
    post { 
        success{
            echo "pushing in release ..."
            bat 'git status'
            bat 'git checkout release'
            bat 'git merge dev'
            bat 'git push origin release'
        }
    }
}