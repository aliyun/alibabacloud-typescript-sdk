// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataMaskingInstanceRequest extends $dara.Model {
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

