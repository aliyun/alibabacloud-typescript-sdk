// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDSEntityResponseBodyEntities extends $dara.Model {
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 234564567445
   */
  entityId?: number;
  entityName?: string;
  /**
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @example
   * test
   */
  modifyUserName?: string;
  sysEntityCode?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      sysEntityCode: 'SysEntityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      sysEntityCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityResponseBody extends $dara.Model {
  entities?: ListDSEntityResponseBodyEntities[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ga4h345defgwet2sdf223
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListDSEntityResponseBodyEntities },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

