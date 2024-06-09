# Convex Schema for 'Rolexes' Table

```
/**
 * convex/schema.ts
 * This file defines the schema for the 'Rolexes' table in the Convex database.
 * 
 * Purpose:
 * - Define the structure of the 'Rolexes' table to store Rolex watches data.
 * - Set the primary key and fields with their respective data types.
 * 
 * Table: 'Rolexes'
 * - Fields:
 *   - id (string): Primary key for each record in the table.
 *   - userId (string): The ID of the user who owns the Rolex.
 *   - count (number): The quantity of Rolex watches the user owns.
 */

import { defineSchema, string, number } from 'convex/schema';

export default defineSchema({
  Rolexes: {
    id: string().primaryKey(),
    userId: string(),
    count: number(),
  },
});

```

Explanation:
- **import**: Importing required functions from `convex/schema` to define the schema.
- **default export defineSchema**: Using `defineSchema` to set up the schema for the 'Rolexes' table.
- **Rolexes object**: 
  - `id`: A string field that is also the primary key.
  - `userId`: A string field to store the user ID.
  - `count`: A number field to store the count of Rolex watches.
