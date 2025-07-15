// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveMessageGroupBandRequest extends $dara.Model {
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
   * The users whom you want to mute.
   * 
   * This parameter is required.
   */
  bannedUsers?: string[];
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application.
   * 
   * >  Valid values: cn-shanghai and ap-southeast-1 (Singapore).
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
      bannedUsers: 'BannedUsers',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bannedUsers: { 'type': 'array', 'itemType': 'string' },
      dataCenter: 'string',
      groupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bannedUsers)) {
      $dara.Model.validateArray(this.bannedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

