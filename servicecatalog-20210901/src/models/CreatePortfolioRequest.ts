// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePortfolioRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the product portfolio.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * The description of the product portfolio.
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The name of the product portfolio.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * DEMO-IT services
   */
  portfolioName?: string;
  /**
   * @remarks
   * The provider of the product portfolio.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * IT team
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portfolioName: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

