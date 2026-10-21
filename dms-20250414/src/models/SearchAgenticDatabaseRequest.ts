// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAgenticDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the catalog that limits the search scope. If you do not specify this parameter, the search is performed across all catalogs.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The database type. This parameter filters the results exactly by the database type of the data source associated with the catalog. The value is the uppercase name of the database type, such as MYSQL.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The environment type. This parameter filters the results exactly by the environment of the associated data source. Valid values: product, pre, dev, test, sit, uat, pet, and stag.
   * 
   * @example
   * product
   */
  envType?: string;
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
   * The token for the next query. You do not need to specify this parameter for the first query. When you query the next page, set this parameter to the NextToken value returned from the previous query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword. It matches the name, fully qualified name, and search name of the database, as well as the name or data source alias of the associated catalog.
   * 
   * @example
   * order
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      dbType: 'DbType',
      envType: 'EnvType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      dbType: 'string',
      envType: 'string',
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

