// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappBindWabaRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * @example
   * 293483****49493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV verification code, used to verify that the sub-account is authorized.
   * 
   * @example
   * aksik93kdkkxmwol9****
   */
  isvCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
      ownerId: 'number',
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

