// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * xxxx
   */
  createTime?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 32323
   */
  createUserId?: number;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @remarks
   * The tag group ID.
   * 
   * @example
   * 232323
   */
  groupId?: number;
  /**
   * @remarks
   * The tag group ID.
   * 
   * @example
   * 7393472
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * xxx
   */
  modifyTime?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * xxx
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The modifier name.
   * 
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Tag 1
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

