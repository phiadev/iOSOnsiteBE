# Phia Onsite Backend

A simple Node.js server with a `fetchData` endpoint that returns hardcoded JSON data.

## Features

- Express.js server with CORS enabled
- `/api/search` endpoint for searching items by name
- `/api/fetchData` endpoint returning all hardcoded JSON data
- Health check endpoint
- Error handling and 404 responses
- Development mode with auto-restart

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Production mode
npm start

# Development mode (with auto-restart)
npm run dev
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## API Endpoints

### GET `/`
Welcome message and available endpoints.

### GET `/api/search?name=<search_term>`
Searches for items by name (case-insensitive). Returns filtered results based on the search term.

**Parameters:**
- `name` (required): The search term to filter items by name

**Example:**
```bash
curl "http://localhost:3000/api/search?name=dress"
```

### POST `/api/toggle-favorite`
Toggles the favorite status of a product item.

**Request Body Parameters:**
- `productId` (required): The unique product identifier

**Example:**
```bash
curl -X POST http://localhost:3000/api/toggle-favorite \
  -H "Content-Type: application/json" \
  -d '{"productId": "ENTITY_TYPE_PRODUCT-ebcb9b193c91a075"}'
``` 

**Response:**
```json
{ "message": true }
```

### GET `/api/fetchData`
Returns all hardcoded JSON data with items, metadata, and timestamp.

**Response:**
```json
{
  "message": "Data fetched successfully",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "items": [
    {
			"itemName": "The Pleated Short in Stretch Linen",
			"brand": "Everlane",
			"price": "83",
			"imageLink": "https://media.everlane.com/images/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/1339c9b6_c62b/womens-pleated-short-in-stretch-linen-cedarwood",
			"productId": "ENTITY_TYPE_PRODUCT-170faf08d338df87",
			"isUsed": false,
			"onSale": true
		},
		{
			"itemName": "Mellie Buckle Strap Mary Jane Flats",
			"brand": "DV Dolce Vita",
			"price": "49",
			"imageLink": "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/26714059_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&wid=1200&fmt=webp",
			"productId": "ENTITY_TYPE_PRODUCT-a0c93828e462609a",
			"isUsed": false,
			"onSale": false
		},
		{
			"itemName": "CAIA KNIT DRESS",
			"brand": "Cult Gaia",
			"price": "598",
			"imageLink": "https://cultgaia.com/cdn/shop/files/250506_DR_CG_PF25_LOOK_137_0051.jpg?v=1751488747&width=2000",
			"productId": "ENTITY_TYPE_PRODUCT-ebcb9b193c91a075",
			"isUsed": false,
			"onSale": false
		},
  ],
  "metadata": {
    "totalItems": 3,
    "lastUpdated": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
```

### GET `/health`
Health check endpoint returning server status and uptime.

## Testing

You can test the endpoints using curl:

```bash
# Test the main endpoint
curl http://localhost:3000/

# Test the search endpoint
curl "http://localhost:3000/api/search?name=dress"

# Test the fetchData endpoint
curl http://localhost:3000/api/fetchData

# Test health check
curl http://localhost:3000/health
```

Or simply open your browser and navigate to:
- http://localhost:3000/
- http://localhost:3000/api/search?name=dress
- http://localhost:3000/api/fetchData
- http://localhost:3000/health
