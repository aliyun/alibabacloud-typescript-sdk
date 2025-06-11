// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhatsappConnectionCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * C2020939922929292
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The WABA ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 292939399393
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

