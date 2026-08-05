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
   * Specifies whether to mute all users in the group.
   * 
   * @example
   * false
   */
  bannedAll?: boolean;
  /**
   * @remarks
   * The list of users to mute. You can specify up to 30 users. Separate multiple user IDs with a comma (,).
   */
  bannnedUsers?: string[];
  /**
   * @remarks
   * The data center. This must be the same data center specified in the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) call. Valid values: \\`cn-shanghai\\` (Shanghai) and \\`ap-southeast-1\\` (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The list of users who are not muted when all users in the group are muted. You can specify up to 30 users. Separate multiple user IDs with a comma (,).
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

