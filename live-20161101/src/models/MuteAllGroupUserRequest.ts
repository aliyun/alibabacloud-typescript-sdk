// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteAllGroupUserRequest extends $dara.Model {
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
   * *   0: specifies that system messages are not broadcasted.
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
   * The ID of the user who performs the operation.
   * 
   * This parameter is required.
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
      operatorUserId: 'OperatorUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      broadCastType: 'number',
      groupId: 'string',
      operatorUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

