// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataMaskingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance identity. You can obtain the value from Items[].InstanceId in the response of ListDataMaskingInstances.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud service type identifier. Valid values:
   * - 5: RDS
   * - 8: POLARDB
   * - 27: PolarDBX2
   * If this parameter is specified together with ProductCode, the values must match.
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

