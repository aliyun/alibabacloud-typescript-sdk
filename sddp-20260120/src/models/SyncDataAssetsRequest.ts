// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDataAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

