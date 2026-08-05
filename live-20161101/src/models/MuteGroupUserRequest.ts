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
   * The system message broadcast type. Valid values:
   * 
   * - 0: no broadcast.
   * 
   * - 1: broadcast to specified users.
   * 
   * - 2: broadcast to the group.
   * 
   * @example
   * 2
   */
  broadCastType?: number;
  /**
   * @remarks
   * The message group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The mute duration. Unit: seconds.
   * 
   * >If this parameter is not specified or is set to 0, the default mute duration (86400 seconds) is used.
   * 
   * @example
   * 3600
   */
  muteTime?: number;
  /**
   * @remarks
   * The mute details.
   * 
   * This parameter is required.
   */
  muteUserList?: string[];
  /**
   * @remarks
   * The user ID of the operator.
   * > This parameter is required, and the user must be the creator of the group.
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

