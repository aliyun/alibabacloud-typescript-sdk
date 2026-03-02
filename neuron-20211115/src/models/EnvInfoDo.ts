// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvInfoDO extends $dara.Model {
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * TEST
   */
  envType?: string;
  /**
   * @example
   * INNER
   */
  orgType?: string;
  /**
   * @example
   * 231
   */
  productId?: number;
  /**
   * @example
   * yunmall
   */
  productName?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      envType: 'envType',
      orgType: 'orgType',
      productId: 'productId',
      productName: 'productName',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      envType: 'string',
      orgType: 'string',
      productId: 'number',
      productName: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

