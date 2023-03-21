FROM nginx
COPY index.html /usr/share/nginx/html
# Durante a criação da imagem
RUN echo 'nova camada'
# Durante a criação do container
ENTRYPOINT [ "echo" ]
# Opcional durante a criação do container
CMD [ "Sou a mensagem padrão." ]

# $(docker ps -aq) puxa todos os containers por ID