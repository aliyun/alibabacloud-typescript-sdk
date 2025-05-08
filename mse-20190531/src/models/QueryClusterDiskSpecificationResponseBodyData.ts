// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterDiskSpecificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum disk capacity. Unit: GB.
   * 
   * @example
   * 500
   */
  max?: number;
  /**
   * @remarks
   * The minimum disk capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The step size of the disk capacity.
   * 
   * @example
   * 2
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

