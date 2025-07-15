// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageGroupBandShrinkRequest extends $dara.Model {
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
   * Specifies whether to mute all users.
   * 
   * @example
   * false
   */
  bannedAll?: boolean;
  /**
   * @remarks
   * The ID of the user whom you want to mute. Separate multiple user IDs with commas (,). You can specify up to 30 users IDs.
   */
  bannnedUsersShrink?: string;
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
   * The ID of the user whom you do not want to mute when you set the BannedAll parameter to true. Separate multiple user IDs with commas (,). You can specify up to 30 users IDs.
   */
  exceptUsersShrink?: string;
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
      bannedAll: 'BannedAll',
      bannnedUsersShrink: 'BannnedUsers',
      dataCenter: 'DataCenter',
      exceptUsersShrink: 'ExceptUsers',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bannedAll: 'boolean',
      bannnedUsersShrink: 'string',
      dataCenter: 'string',
      exceptUsersShrink: 'string',
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

