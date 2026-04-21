// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketProductPublicationDetail extends $dara.Model {
  portalId?: string;
  portalName?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  publicationId?: string;
  static names(): { [key: string]: string } {
    return {
      portalId: 'portalId',
      portalName: 'portalName',
      productId: 'productId',
      productName: 'productName',
      productType: 'productType',
      publicationId: 'publicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portalId: 'string',
      portalName: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      publicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

