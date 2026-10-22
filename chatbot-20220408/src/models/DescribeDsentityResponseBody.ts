// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDSEntityResponseBody extends $dara.Model {
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
   * The ID of the creator.
   * 
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @remarks
   * The name of the creator.
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
   * The entity name. Only Chinese characters, uppercase and lowercase letters, digits, and underscores are supported.
   * 
   * @example
   * BookType
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values: synonyms (synonym) and regex (regular expression).
   * 
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The unique identifier of the modifier.
   * 
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @remarks
   * The name of the modifier.
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
   * The system entity code, such as sys.date. This parameter is empty for user entities.
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

