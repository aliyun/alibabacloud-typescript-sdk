// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckLiveMessageUsersInGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The list of users that you want to query.
   * 
   * This parameter is required.
   */
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      userIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

