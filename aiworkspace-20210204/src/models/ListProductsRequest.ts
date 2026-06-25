// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The product codes, separated by commas.
   * 
   * @example
   * PAI_isolate
   */
  productCodes?: string;
  /**
   * @remarks
   * The service codes, separated by commas.
   * 
   * @example
   * oss
   */
  serviceCodes?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      productCodes: 'ProductCodes',
      serviceCodes: 'ServiceCodes',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCodes: 'string',
      serviceCodes: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

