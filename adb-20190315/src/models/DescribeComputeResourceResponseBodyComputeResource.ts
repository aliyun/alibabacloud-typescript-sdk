// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComputeResourceResponseBodyComputeResource extends $dara.Model {
  /**
   * @remarks
   * The specifications of computing resources displayed in the console.
   * 
   * @example
   * 8 Core 32 GB
   */
  displayValue?: string;
  /**
   * @remarks
   * The actual specifications of computing resources.
   * 
   * @example
   * 8 Core 32 GB
   */
  realValue?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'DisplayValue',
      realValue: 'RealValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      realValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

