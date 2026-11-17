// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKmsKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance identity. You can obtain this value from the Items[].InstanceId field in the response of the ListDataMaskingInstances operation.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values: zh: Chinese, en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The code of the cloud service. Column encryption supports RDS, POLARDB, and PolarDBX2. If you specify both this parameter and ProductId, the values must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the cloud service type. Valid values: 5: RDS, 8: POLARDB, and 27: PolarDBX2. If you specify both this parameter and ProductCode, the values must match.
   * 
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

