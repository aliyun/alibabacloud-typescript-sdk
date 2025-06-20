// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInnerProductInfoResponseBodyDataDataInfo extends $dara.Model {
  innerProductCode?: string;
  innerProductName?: string;
  productCode?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      innerProductCode: 'InnerProductCode',
      innerProductName: 'InnerProductName',
      productCode: 'ProductCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerProductCode: 'string',
      innerProductName: 'string',
      productCode: 'string',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

