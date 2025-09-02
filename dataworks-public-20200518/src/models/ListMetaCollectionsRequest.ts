// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collection administrator.
   * 
   * @example
   * 1200759642363000
   */
  administrator?: string;
  /**
   * @remarks
   * - ALBUM: data album 
   * - ALBUM_CATEGORY: category in a data album
   * 
   * This parameter is required.
   * 
   * @example
   * ALBUM
   */
  collectionType?: string;
  /**
   * @remarks
   * The ID of the collection creator.
   * 
   * @example
   * 1200759642363000
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the collection follower.
   * 
   * @example
   * 1200759642363000
   */
  follower?: string;
  /**
   * @remarks
   * The keyword.
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
   * 12345
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the sorting field.
   * 
   * @example
   * test
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the parent collection.
   * 
   * @example
   * Album.1234
   */
  parentQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      administrator: 'Administrator',
      collectionType: 'CollectionType',
      creator: 'Creator',
      follower: 'Follower',
      keyword: 'Keyword',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      parentQualifiedName: 'ParentQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrator: 'string',
      collectionType: 'string',
      creator: 'string',
      follower: 'string',
      keyword: 'string',
      nextToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      parentQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

