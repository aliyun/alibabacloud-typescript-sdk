// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application whose user information you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
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
   * The ID of the user whose information you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * uid2
   */
  userId?: string;
  /**
   * @remarks
   * The additional information about the user after the modification. The value can be up to 512 bytes in length.
   * 
   * @example
   * uid2meta2
   */
  userMetaInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      userId: 'UserId',
      userMetaInfo: 'UserMetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      userId: 'string',
      userMetaInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

