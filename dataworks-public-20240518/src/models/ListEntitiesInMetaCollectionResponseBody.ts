// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities extends $dara.Model {
  /**
   * @remarks
   * The entity comment.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The creation time in milliseconds.
   * 
   * @example
   * 1737078994080
   */
  createTime?: number;
  /**
   * @remarks
   * The description specified when the entity was added to the collection. Valid only for albums.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the entity. Currently, only the Table type is supported. If the entity is deleted, this field is empty.
   * 
   * @example
   * dlf-table:123456789:test_catalog:test_database::test_table
   */
  id?: string;
  /**
   * @remarks
   * The last modified time in milliseconds.
   * 
   * @example
   * 1737078994080
   */
  modifyTime?: number;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * dlf-table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      description: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesInMetaCollectionResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of entities in the collection.
   */
  entities?: ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesInMetaCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination result.
   */
  pagingInfo?: ListEntitiesInMetaCollectionResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F05080B0-CCE6-5D22-B284-34A51C5D4E28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListEntitiesInMetaCollectionResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

