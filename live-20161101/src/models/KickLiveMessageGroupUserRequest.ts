// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KickLiveMessageGroupUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application to which the interactive messaging group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * coims-****
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
   * The ID of the interactive messaging group from which you want to remove the user.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The user that you want to remove.
   * 
   * This parameter is required.
   * 
   * @example
   * uid1
   */
  kickoffUser?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      kickoffUser: 'KickoffUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      kickoffUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

