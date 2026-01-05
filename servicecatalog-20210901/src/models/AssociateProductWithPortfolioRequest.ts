// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateProductWithPortfolioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * This parameter is required.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

