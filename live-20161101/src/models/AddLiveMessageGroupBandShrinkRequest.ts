// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveMessageGroupBandShrinkRequest extends $dara.Model {
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
   * A list of users to mute. Separate multiple user IDs with a comma (,). You can specify a maximum of 30 users.
   * 
   * This parameter is required.
   */
  bannedUsersShrink?: string;
  /**
   * @remarks
   * The data center. This must be the same data center that you specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation.
   * 
   * > Currently, this operation is supported in Shanghai (value: cn-shanghai) and Singapore (value: ap-southeast-1).
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bannedUsersShrink: 'BannedUsers',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bannedUsersShrink: 'string',
      dataCenter: 'string',
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

