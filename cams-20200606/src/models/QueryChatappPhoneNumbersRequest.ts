// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappPhoneNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID of the ISV sub-customer.
   * 
   * @example
   * 29348393884****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The verification code of the Independent Software Vendor (ISV). This code is used to verify if the user is authorized by the ISV.
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
   * The status of the phone number.
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

