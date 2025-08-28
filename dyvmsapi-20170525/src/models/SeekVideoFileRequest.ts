// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SeekVideoFileRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫唯一ID
   * 
   * @example
   * 示例值
   */
  callId?: string;
  /**
   * @remarks
   * 被叫号码
   * 
   * @example
   * 示例值示例值示例值
   */
  calledNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 快进或快退值，负数为快退，单位秒
   * 
   * @example
   * 92
   */
  seekTimes?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      seekTimes: 'SeekTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      seekTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

