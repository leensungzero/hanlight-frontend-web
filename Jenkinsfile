node {
    agent {
        docker {
            image 'node:10.15.3'
            args ''
        }
    }

    stage('Clone repository') {
        checkout scm
    }

    stage('Install Node Modules') {
        script {
            sh 'npm install -g yarn'
            sh 'yarn'
        }
    }

    stage('Build') {
        script {
            try {
                sh 'yarn build'
            } catch (err) {
                echo 'Failed: $(err)'
            }
        }
    }
}