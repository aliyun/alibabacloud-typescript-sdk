// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelMuteGroupUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Interactive Messages application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * System message diffusion type, values:
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
   * User ID group.
   * 
   * This parameter is required.
   */
  cancelMuteUserListShrink?: string;
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
   * Operator\\"s user ID.
   * 
   * > This parameter must be filled and the user must be the creator of the group.
   * 
   * @example
   * de1**a0
   */
  operatorUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      broadCastType: 'BroadCastType',
      cancelMuteUserListShrink: 'CancelMuteUserList',
      groupId: 'GroupId',
      operatorUserId: 'OperatorUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      broadCastType: 'number',
      cancelMuteUserListShrink: 'string',
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

