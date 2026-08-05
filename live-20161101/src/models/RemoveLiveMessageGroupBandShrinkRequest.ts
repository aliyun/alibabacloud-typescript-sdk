// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveLiveMessageGroupBandShrinkRequest extends $dara.Model {
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
   * The data center. This must be the same data center that you specified when you called [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html).
   * 
   * > Valid values: \\`cn-shanghai\\` (Shanghai) and \\`ap-southeast-1\\` (Singapore).
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
   * The list of users to unmute. You can specify up to 30 users. Separate multiple user IDs with commas (,).
   * 
   * This parameter is required.
   */
  unbannedUsersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      unbannedUsersShrink: 'UnbannedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      unbannedUsersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

