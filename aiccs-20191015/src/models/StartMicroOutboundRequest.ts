// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMicroOutboundRequest extends $dara.Model {
  /**
   * @remarks
   * Account ID.
   * 
   * @example
   * 223457****
   */
  accountId?: string;
  /**
   * @remarks
   * Account type.
   * 
   * @example
   * BUC_TYPE
   */
  accountType?: string;
  /**
   * @remarks
   * Custom AppName for the business.
   * 
   * @example
   * aliyun
   */
  appName?: string;
  /**
   * @remarks
   * Called number.
   * 
   * @example
   * 0571456****
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * @example
   * 1367123****
   */
  callingNumber?: string;
  /**
   * @remarks
   * Instruction code.
   * 
   * @example
   * outBound_Call
   */
  commandCode?: string;
  /**
   * @remarks
   * Business information.
   * 
   * @example
   * {"caseId":23232****}
   */
  extInfo?: string;
  ownerId?: number;
  /**
   * @remarks
   * Product name. Default value: **aiccs**.
   * 
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

