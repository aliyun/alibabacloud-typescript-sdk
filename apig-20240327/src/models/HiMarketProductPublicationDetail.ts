// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketProductPublicationDetail extends $dara.Model {
  /**
   * @remarks
   * The portal ID.
   * 
   * @example
   * portal-xxx
   */
  portalId?: string;
  /**
   * @remarks
   * The portal name.
   * 
   * @example
   * 开发者门户
   */
  portalName?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * prod-xxx
   */
  productId?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * AI网关API
   */
  productName?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * ApiGateway
   */
  productType?: string;
  /**
   * @remarks
   * The product publish ID.
   * 
   * @example
   * pub-xxx
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

