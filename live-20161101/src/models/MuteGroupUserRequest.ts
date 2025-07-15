// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteGroupUserRequest extends $dara.Model {
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
   * The duration of the mute. Unit: seconds.
   * 
   * > If you do not specify this parameter or set the value to 0, the default duration of 86,400 seconds is used.
   * 
   * @example
   * 3600
   */
  muteTime?: number;
  /**
   * @remarks
   * Details about the mute.
   * 
   * This parameter is required.
   */
  muteUserList?: string[];
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
      groupId: 'GroupId',
      muteTime: 'MuteTime',
      muteUserList: 'MuteUserList',
      operatorUserId: 'OperatorUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      broadCastType: 'number',
      groupId: 'string',
      muteTime: 'number',
      muteUserList: { 'type': 'array', 'itemType': 'string' },
      operatorUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.muteUserList)) {
      $dara.Model.validateArray(this.muteUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

