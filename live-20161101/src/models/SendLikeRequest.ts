// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLikeRequest extends $dara.Model {
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
   * System message diffusion type. Valid values:
   * 
   * - 0: No diffusion.
   * - 1: Diffusion to specified users.
   * - 2: Diffusion to a group.
   * 
   * @example
   * 2
   */
  broadCastType?: number;
  /**
   * @remarks
   * Number of likes.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  count?: string;
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
   * Operator user ID.
   * 
   * @example
   * de1**a0
   */
  operatorUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      broadCastType: 'BroadCastType',
      count: 'Count',
      groupId: 'GroupId',
      operatorUserId: 'OperatorUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      broadCastType: 'number',
      count: 'string',
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

