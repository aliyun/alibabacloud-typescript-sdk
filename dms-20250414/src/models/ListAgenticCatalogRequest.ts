// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog type. This parameter is used to filter catalogs by exact type. Valid values:
   * 
   * - **JDBC**: relational database catalog
   * - **DataLake**: data lake catalog
   * - **Dataset**: knowledge base catalog
   * 
   * @example
   * JDBC
   */
  catalogType?: string;
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
   * The token for the next query. You do not need to specify this parameter for the first query. To query the next page, set this parameter to the NextToken value returned from the previous query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for the catalog name. Matches catalogs by name prefix.
   * 
   * @example
   * prod_
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      catalogType: 'CatalogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogType: 'string',
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

