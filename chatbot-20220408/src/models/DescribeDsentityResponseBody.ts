// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDSEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the entity was created, in UTC.
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
   * The entity ID.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * The entity name. The name can contain only Chinese characters, letters, digits, and underscores (_).
   * 
   * @example
   * 书类型
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values are `synonyms` and `regex`.
   * 
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * The time when the entity was last modified, in UTC.
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
   * The request ID.
   * 
   * @example
   * ad23234dsf234fga
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the system entity, such as sys.date. This parameter is empty for user-defined entities.
   * 
   * @example
   * sys.date
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

