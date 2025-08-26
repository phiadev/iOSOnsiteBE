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
Allows for user to toggle if they want to favorite / unfavorite item

**Response:**
```json
{
  "message": "Search results for \"dress\"",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "searchTerm": "dress",
  "items": [
    {
      "itemName": "CAIA KNIT DRESS",
      "brand": "Cult Gaia",
      "price": "598",
      "imageLink": "https://cultgaia.com/cdn/shop/files/250506_DR_CG_PF25_LOOK_137_0051.jpg?v=1751488747&width=2000",
      "productId": "ENTITY_TYPE_PRODUCT-ebcb9b193c91a075"
    },
    {
      "itemName": "Alyse V–Neck Midi Dress",
      "brand": "Ulla Johnson",
      "price": "1380",
      "imageLink": "https://ullajohnson.com/cdn/shop/files/ULLA-JOHNSON_Alyse-V-Neck-Midi-Dress_PEARL_PF250181_01_MAIN_v4_887acdc4-bec0-457d-a4b0-84e963f13e44.jpg?v=1747329333&width=1920",
      "productId": "ENTITY_TYPE_PRODUCT-afe997bb77baaf4b"
    }
  ],
  "metadata": {
    "totalItems": 2,
    "searchTerm": "dress",
    "lastUpdated": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
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
      "id": 1,
      "name": "Item 1",
      "description": "This is the first item",
      "price": 29.99,
      "category": "electronics"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "This is the second item", 
      "price": 49.99,
      "category": "clothing"
    },
    {
      "id": 3,
      "name": "Item 3",
      "description": "This is the third item",
      "price": 19.99,
      "category": "books"
    }
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
