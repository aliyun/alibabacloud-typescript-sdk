// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMicroOutboundRequest extends $dara.Model {
  /**
   * @example
   * 223457****
   */
  accountId?: string;
  /**
   * @example
   * BUC_TYPE
   */
  accountType?: string;
  /**
   * @example
   * aliyun
   */
  appName?: string;
  /**
   * @example
   * 0571456****
   */
  calledNumber?: string;
  /**
   * @example
   * 1367123****
   */
  callingNumber?: string;
  /**
   * @example
   * outBound_Call
   */
  commandCode?: string;
  /**
   * @example
   * {"caseId":23232****}
   */
  extInfo?: string;
  ownerId?: number;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      appName: 'AppName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commandCode: 'CommandCode',
      extInfo: 'ExtInfo',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      appName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      commandCode: 'string',
      extInfo: 'string',
      ownerId: 'number',
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

