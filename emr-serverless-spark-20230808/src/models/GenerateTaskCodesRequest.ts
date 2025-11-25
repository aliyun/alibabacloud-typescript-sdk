// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTaskCodesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  genNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      genNum: 'genNum',
      productNamespace: 'productNamespace',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      genNum: 'number',
      productNamespace: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

