

#app directory
WORKDIR /index

#install Dependecies 

# run                          
# RUN npm install

#bundle app source 
COPY . .

EXPOSE 8080

CMD ["npm","start"]