// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagGroupResponseBody extends $dara.Model {
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
   * The ID of the creator.
   * 
   * @example
   * 32323
   */
  createUserId?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @remarks
   * The ID of the default tag.
   * 
   * @example
   * 232323
   */
  defaultTagId?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Tag 1
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the tag group.
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
   * The ID of the modifier.
   * 
   * @example
   * xxx
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The name of the modifier.
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

