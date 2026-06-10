// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDSEntityResponseBodyEntities extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the entity.
   * 
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @remarks
   * The name of the user who created the entity.
   * 
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 234564567445
   */
  entityId?: number;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * 书实体
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values: `synonyms`, `regex`, and `system`.
   * 
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * The update time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the user who last modified the entity.
   * 
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @remarks
   * The name of the user who last modified the entity.
   * 
   * @example
   * test
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The code for the system entity, such as `sys_date`. This parameter is blank for custom entities.
   * 
   * @example
   * sys_date
   */
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
  /**
   * @remarks
   * The list of entities.
   */
  entities?: ListDSEntityResponseBodyEntities[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ga4h345defgwet2sdf223
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of matching entries.
   * 
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

