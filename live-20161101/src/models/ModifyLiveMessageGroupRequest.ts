// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of administrators after your change.
   */
  adminList?: string[];
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
   * The additional information about the group after the modification. The value can be up to 32 KB in length.
   * 
   * @example
   * newmeta
   */
  groupInfo?: string;
  /**
   * @remarks
   * Specifies whether to change the group administrators.
   * 
   * @example
   * true
   */
  modifyAdmin?: boolean;
  /**
   * @remarks
   * Specifies whether to modify the additional information about the group.
   * 
   * @example
   * true
   */
  modifyInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      appId: 'AppId',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      groupInfo: 'GroupInfo',
      modifyAdmin: 'ModifyAdmin',
      modifyInfo: 'ModifyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': 'string' },
      appId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      groupInfo: 'string',
      modifyAdmin: 'boolean',
      modifyInfo: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

