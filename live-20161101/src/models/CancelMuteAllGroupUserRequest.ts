// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelMuteAllGroupUserRequest extends $dara.Model {
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
   * 系统消息扩散类型，取值：
   * 
   * - 0：不扩散。
   * 
   * - 1：扩散到指定人。
   * 
   * - 2：扩散到群组。
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
   * Operator\\"s UserId. > This parameter is required and the user must be the creator of the group.
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

