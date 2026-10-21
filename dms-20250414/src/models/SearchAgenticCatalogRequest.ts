// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAgenticCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog type. Filters catalogs by exact type. Valid values:
   * 
   * - **JDBC**: relational database catalog.
   * - **DataLake**: data lake catalog.
   * - **Dataset**: knowledge base catalog.
   * 
   * @example
   * JDBC
   */
  catalogType?: string;
  /**
   * @remarks
   * The list of catalog UUIDs. Filters catalogs exactly by UUID. Separate multiple UUIDs with commas (,). You can specify up to 500 UUIDs, and null values are not allowed. If this parameter is specified along with other filter conditions, the conditions are combined by using the AND logical operator.
   * 
   * @example
   * mc-HZ-OfjcNc2z***,mc-HZ-Bq8Lx3wT***
   */
  catalogUuids?: string;
  /**
   * @remarks
   * The database type. Filters catalogs exactly by the database type of the associated data source. The value is the uppercase name of the database type, such as MYSQL.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. This parameter is not required for the first query. To query the next page, set this parameter to the NextToken value returned in the previous response.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword. It matches the catalog name, data source alias, or the prefix of the data source endpoint. A catalog is matched if any of these conditions are met.
   * 
   * @example
   * prod_
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      catalogType: 'CatalogType',
      catalogUuids: 'CatalogUuids',
      dbType: 'DbType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogType: 'string',
      catalogUuids: 'string',
      dbType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

