// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGateVerifyBillingPublicRequest extends $dara.Model {
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   **0**: phone number verification
   * *   **1**: one-click logon
   * *   **2**: all
   * *   **3**: facial recognition
   * *   **4**: SMS verification
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authenticationType?: number;
  /**
   * @remarks
   * The month in which the bill is generated. Specify this parameter in the YYYYMM format. Example: 202111.
   * 
   * This parameter is required.
   * 
   * @example
   * 202111
   */
  month?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      month: 'Month',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      month: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

