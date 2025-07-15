// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelMuteGroupUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The mode in which system messages are broadcasted. Valid values:
   * 
   * *   0: specifies that system messages are not broadcasted. This is the default value.
   * *   1: specifies that system messages are broadcasted to specified users.
   * *   2: specifies that system messages are broadcasted to the message group.
   * 
   * @example
   * 2
   */
  broadCastType?: number;
  /**
   * @remarks
   * The IDs of the users.
   * 
   * This parameter is required.
   */
  cancelMuteUserList?: string[];
  /**
   * @remarks
   * The ID of the message group.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * de1**a0
   */
  operatorUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      broadCastType: 'BroadCastType',
      cancelMuteUserList: 'CancelMuteUserList',
      groupId: 'GroupId',
      operatorUserId: 'OperatorUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      broadCastType: 'number',
      cancelMuteUserList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      operatorUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cancelMuteUserList)) {
      $dara.Model.validateArray(this.cancelMuteUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

