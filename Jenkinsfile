pipeline {
    agent {
        docker {
            image 'node:10.15.3'
            args ''
        }
    }

    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }

        stage('Install Node Modules') {
            steps {
                script {
                    sh 'npm install -g yarn'
                    sh 'yarn'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    try {
                        sh 'yarn build'
                    } catch (err) {
                        echo 'Failed: $(err)'
                    }
                }
            }
        }
    }
}