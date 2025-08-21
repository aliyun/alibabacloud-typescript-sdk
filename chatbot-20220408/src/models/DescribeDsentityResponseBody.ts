// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDSEntityResponseBody extends $dara.Model {
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
   * 123
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
  /**
   * @example
   * ad23234dsf234fga
   */
  requestId?: string;
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

