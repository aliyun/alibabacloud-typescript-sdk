// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageGroupBandRequest extends $dara.Model {
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
  bannnedUsers?: string[];
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
  exceptUsers?: string[];
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
      bannnedUsers: 'BannnedUsers',
      dataCenter: 'DataCenter',
      exceptUsers: 'ExceptUsers',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bannedAll: 'boolean',
      bannnedUsers: { 'type': 'array', 'itemType': 'string' },
      dataCenter: 'string',
      exceptUsers: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bannnedUsers)) {
      $dara.Model.validateArray(this.bannnedUsers);
    }
    if(Array.isArray(this.exceptUsers)) {
      $dara.Model.validateArray(this.exceptUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

