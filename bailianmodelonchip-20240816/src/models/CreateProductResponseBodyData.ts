// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductResponseBodyData extends $dara.Model {
  /**
   * @example
   * v7+7WMzYjHhyhb0c6IDL3e1rwCcphld19XzLYcwredVkHOht9et5GhPV45AqCzX7
   */
  apiKey?: string;
  description?: string;
  /**
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 10bcac8989aed3f1047b71e6c06ef3ab
   */
  productSecret?: string;
  /**
   * @example
   * 503041545
   */
  tenantId?: string;
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      description: 'description',
      productKey: 'productKey',
      productName: 'productName',
      productSecret: 'productSecret',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      description: 'string',
      productKey: 'string',
      productName: 'string',
      productSecret: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

