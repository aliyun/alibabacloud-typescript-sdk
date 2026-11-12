// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductReportsRequest extends $dara.Model {
  latestOnly?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloudsec.demo.v1
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      latestOnly: 'LatestOnly',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestOnly: 'boolean',
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

