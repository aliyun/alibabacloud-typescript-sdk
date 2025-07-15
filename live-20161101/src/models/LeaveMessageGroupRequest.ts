// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LeaveMessageGroupRequest extends $dara.Model {
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
   * Specifies whether to broadcast statistical messages. If you set the value to true, statistical messages of the message group are broadcasted after the users join the message group. The client can receive and process these messages. Valid values:
   * 
   * *   true: broadcasts statistical messages.
   * *   false: does not broadcast statistical messages.
   * 
   * @example
   * true
   */
  broadCastStatistics?: boolean;
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
   * The ID of the user. Each user has a unique ID in the application.
   * 
   * This parameter is required.
   * 
   * @example
   * de1**a0
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      broadCastStatistics: 'BroadCastStatistics',
      broadCastType: 'BroadCastType',
      groupId: 'GroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      broadCastStatistics: 'boolean',
      broadCastType: 'number',
      groupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

