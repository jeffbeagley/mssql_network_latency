# Microsoft SQL Network Latency check

Determine Network lag between SQL Host and Client

### Build Image

    docker build . -t jeffbeagley/mssql_network_latency:1.0.0

### Push Image

    docker push jeffbeagley/mssql_network_latency:1.0.0

## Example usage

    docker run -it \
    -e SQL_USERNAME=<username> \
    -e SQL_PASSWORD=<password> \
    -e SQL_HOSTNAME=<hostname> \
    -e SQL_DB=<db> \
    jeffbeagley/mssql_network_latency:1.0.0

## Environment Variables

### SQL_USERNAME (required)

username

### SQL_PASSWORD (required)

password

### SQL_HOSTNAME (required)

hostname or ip

### SQL_DB (optional)

#### default: master

initial db to use for connection
