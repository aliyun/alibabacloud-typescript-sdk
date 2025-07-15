// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveMessageGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of administrators.
   */
  administratorsShrink?: string;
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
   * The ID of the group creator. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * @example
   * uid1
   */
  creatorId?: string;
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2593195.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The ID of the group that you want to create. The group ID must be unique within your business. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The additional information about the group. The value can be up to 32 KB in length.
   * 
   * @example
   * testgroupinfo
   */
  groupInfo?: string;
  /**
   * @remarks
   * The name of the group. The name can be up to 128 bytes in length.
   * 
   * @example
   * mytestgroup
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      administratorsShrink: 'Administrators',
      appId: 'AppId',
      creatorId: 'CreatorId',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      groupInfo: 'GroupInfo',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorsShrink: 'string',
      appId: 'string',
      creatorId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      groupInfo: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

