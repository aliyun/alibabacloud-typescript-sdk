// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * album.12345
   */
  collectionQualifiedName?: string;
  /**
   * @remarks
   * The type of the entities.
   * 
   * For example, if this parameter is set to maxcompute-table, the entity is a MaxCompute table.
   * 
   * @example
   * maxcompute-table
   */
  entityType?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 12222
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      collectionQualifiedName: 'CollectionQualifiedName',
      entityType: 'EntityType',
      keyword: 'Keyword',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionQualifiedName: 'string',
      entityType: 'string',
      keyword: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

