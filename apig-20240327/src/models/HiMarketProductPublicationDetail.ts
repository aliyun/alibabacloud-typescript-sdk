// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketProductPublicationDetail extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the portal.
   */
  portalId?: string;
  /**
   * @remarks
   * The name of the portal.
   */
  portalName?: string;
  /**
   * @remarks
   * The unique ID of the product.
   */
  productId?: string;
  /**
   * @remarks
   * The name of the product.
   */
  productName?: string;
  /**
   * @remarks
   * The type of the product.
   */
  productType?: string;
  /**
   * @remarks
   * The unique ID of the product publication.
   */
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

