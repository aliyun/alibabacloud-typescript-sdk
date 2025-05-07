// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange extends $dara.Model {
  /**
   * @remarks
   * The maximum storage capacity that is supported for the instance. Unit: GB.
   * 
   * @example
   * 2000
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum storage capacity that is supported for the instance. Unit: GB.
   * 
   * @example
   * 5
   */
  minValue?: number;
  /**
   * @remarks
   * The minimum step size at which you can adjust the storage capacity of the instance. The minimum step size is 5 GB.
   * 
   * @example
   * 5
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
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

