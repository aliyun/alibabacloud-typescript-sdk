// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagResponseBody extends $dara.Model {
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
  groupId?: number;
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
  /**
   * @example
   * 标签1
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      groupId: 'GroupId',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      requestId: 'RequestId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      groupId: 'number',
      id: 'number',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      requestId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

