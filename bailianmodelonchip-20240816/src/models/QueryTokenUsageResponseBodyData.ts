// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTokenUsageResponseBodyData extends $dara.Model {
  /**
   * @example
   * oqYVtK7DnaVj4JpbFtghJV2CZy7HwhOI0do3mf8twx9TGCMNNXYBptJ0+ULqO3xD
   */
  apiKey?: string;
  /**
   * @example
   * 1000
   */
  inputToken?: number;
  /**
   * @example
   * 1000
   */
  outputToken?: number;
  /**
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 520539530998273
   */
  tenantId?: string;
  /**
   * @example
   * 2025-04-01
   */
  usageTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      inputToken: 'inputToken',
      outputToken: 'outputToken',
      productKey: 'productKey',
      productName: 'productName',
      tenantId: 'tenantId',
      usageTime: 'usageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      inputToken: 'number',
      outputToken: 'number',
      productKey: 'string',
      productName: 'string',
      tenantId: 'string',
      usageTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

