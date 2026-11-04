// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappPhoneNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * @example
   * 29348393884****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV verification code, used to verify whether a sub-account is authorized by an ISV.
   * 
   * @example
   * aksik93kdkkxmwol9****
   */
  isvCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The phone number status.
   * 
   * @example
   * VERIFIED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

