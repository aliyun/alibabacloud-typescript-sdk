// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePortfolioRequest extends $dara.Model {
  /**
   * @remarks
   * 产品组合描述
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * This parameter is required.
   */
  portfolioName?: string;
  /**
   * @remarks
   * 产品组合提供方
   * 
   * This parameter is required.
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portfolioId: 'string',
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

