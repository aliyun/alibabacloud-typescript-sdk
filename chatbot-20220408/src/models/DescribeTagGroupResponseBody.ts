// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagGroupResponseBody extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  createTime?: string;
  /**
   * @example
   * 32323
   */
  createUserId?: number;
  /**
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @example
   * 232323
   */
  defaultTagId?: number;
  /**
   * @example
   * 标签1
   */
  groupName?: string;
  /**
   * @example
   * 7393472
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  modifyTime?: string;
  /**
   * @example
   * xxx
   */
  modifyUserId?: number;
  /**
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      defaultTagId: 'DefaultTagId',
      groupName: 'GroupName',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      defaultTagId: 'number',
      groupName: 'string',
      id: 'number',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

