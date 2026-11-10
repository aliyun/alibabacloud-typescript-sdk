// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class InvokeDataProductRequest extends $dara.Model {
  clientToken?: string;
  productCode?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      productCode: 'productCode',
      serviceParameters: 'serviceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      productCode: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

