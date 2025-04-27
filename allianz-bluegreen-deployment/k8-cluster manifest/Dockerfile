FROM jenkins/jenkins:lts

USER root

# Install Docker, Docker Compose, and kubectl
RUN groupadd -for -g 999 systemd-journal && usermod -aG systemd-journal jenkins && \
    apt-get update && \
    apt-get install -y \
    docker.io \
    docker-compose \
    curl \
    && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl && \
    apt-get clean

# Add the Jenkins user to the Docker and systemd-journal groups
RUN usermod -aG docker jenkins

# Expose necessary ports
EXPOSE 8080 50000

# Switch back to the Jenkins user
USER jenkins

