// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RobotCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131****2204
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @example
   * false
   */
  earlyMediaAsr?: boolean;
  /**
   * @example
   * abcdefgh
   */
  outId?: string;
  ownerId?: number;
  params?: string;
  /**
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 350000****
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      earlyMediaAsr: 'EarlyMediaAsr',
      outId: 'OutId',
      ownerId: 'OwnerId',
      params: 'Params',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      earlyMediaAsr: 'boolean',
      outId: 'string',
      ownerId: 'number',
      params: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

