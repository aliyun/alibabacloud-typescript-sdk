// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePortfolioRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

