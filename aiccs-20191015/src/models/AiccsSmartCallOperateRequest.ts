// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiccsSmartCallOperateRequest extends $dara.Model {
  /**
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @example
   * parallelBridge
   */
  command?: string;
  ownerId?: number;
  /**
   * @example
   * Param
   */
  param?: string;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      ownerId: 'number',
      param: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

