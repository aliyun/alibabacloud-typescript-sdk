// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 1737078994080
   */
  createTime?: number;
  description?: string;
  /**
   * @remarks
   * The entity ID. Entities can only be tables. This parameter is left empty if the entity is deleted.
   * 
   * @example
   * dlf-table:123456789:test_catalog:test_database::test_table
   */
  id?: string;
  /**
   * @example
   * 1737078994080
   */
  modifyTime?: number;
  /**
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The type of the entity.
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
   * The entities in the collection.
   */
  entities?: ListEntitiesInMetaCollectionResponseBodyPagingInfoEntities[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
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
   * The pagination information.
   */
  pagingInfo?: ListEntitiesInMetaCollectionResponseBodyPagingInfo;
  /**
   * @remarks
   * Id of the request
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

