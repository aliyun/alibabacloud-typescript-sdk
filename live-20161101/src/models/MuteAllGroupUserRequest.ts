// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteAllGroupUserRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID for interactive messages.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The system message diffusion type. Valid values:
   * 
   * - 0: No diffusion.
   * - 1: Diffusion to specified users.
   * - 2: Diffusion to the group.
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
   * The user ID of the operator. This user must be the creator of the group.
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

