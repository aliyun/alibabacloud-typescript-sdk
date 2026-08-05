// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BanLiveMessageGroupShrinkRequest extends $dara.Model {
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
   * The data center. This value must be the same as the data center that you specified when you called [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html).
   * 
   * > The supported data centers are China (Shanghai) (cn-shanghai) and Singapore (ap-southeast-1).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The users who are exempt from the group-wide mute. Specify up to 30 users. Separate multiple user IDs with a comma (,).
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
      dataCenter: 'DataCenter',
      exceptUsersShrink: 'ExceptUsers',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

