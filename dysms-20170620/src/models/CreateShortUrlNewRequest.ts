// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShortUrlNewRequest extends $dara.Model {
  effectDay?: number;
  eventName?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      effectDay: 'EffectDay',
      eventName: 'EventName',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectDay: 'number',
      eventName: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

