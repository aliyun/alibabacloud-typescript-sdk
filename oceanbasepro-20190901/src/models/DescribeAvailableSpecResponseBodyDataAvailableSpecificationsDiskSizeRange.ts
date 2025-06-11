// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange extends $dara.Model {
  /**
   * @example
   * 40000
   */
  max?: number;
  /**
   * @example
   * 1000
   */
  min?: number;
  /**
   * @example
   * 5
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

