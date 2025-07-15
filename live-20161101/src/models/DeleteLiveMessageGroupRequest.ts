// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveMessageGroupRequest extends $dara.Model {
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
   * The ID of the group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the user who performs the deletion operation. The ID can be up to 64 bytes in length and can contain only letters and digits.
   * 
   * @example
   * uid1
   */
  operatorId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      operatorId: 'OperatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      groupId: 'string',
      operatorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

