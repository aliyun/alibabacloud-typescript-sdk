// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LeaveMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Interactive message application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to broadcast statistics messages. When enabled, the statistics information of the message group will be broadcast after joining the message group, and the client can receive and process this message. Valid values:
   * 
   * - true: Broadcast statistics messages.
   * - false: Do not broadcast statistics messages.
   * 
   * @example
   * true
   */
  broadCastStatistics?: boolean;
  /**
   * @remarks
   * System message diffusion type. Valid values:
   * 
   * - 0 (default): No diffusion.
   * - 1: Diffusion to specified users.
   * - 2: Diffusion to the group.
   * 
   * @example
   * 2
   */
  broadCastType?: number;
  /**
   * @remarks
   * Message group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * User ID, which is customized by the user and must be unique under the AppId.
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

