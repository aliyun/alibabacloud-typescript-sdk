// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductRequest extends $dara.Model {
  /**
   * @remarks
   * 产品描述
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
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * This parameter is required.
   */
  productName?: string;
  /**
   * @remarks
   * 产品提供方
   * 
   * This parameter is required.
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productId: 'ProductId',
      productName: 'ProductName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productId: 'string',
      productName: 'string',
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

