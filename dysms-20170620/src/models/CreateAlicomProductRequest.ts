// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlicomProductRequest extends $dara.Model {
  busOffer?: number;
  busOffers?: string;
  ownerId?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prodId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      busOffer: 'BusOffer',
      busOffers: 'BusOffers',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      prodId: 'ProdId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busOffer: 'number',
      busOffers: 'string',
      ownerId: 'number',
      prodCode: 'string',
      prodId: 'string',
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

