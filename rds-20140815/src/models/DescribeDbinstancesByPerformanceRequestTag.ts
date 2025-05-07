// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByPerformanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag 1 that is added to the instances.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag 1 that is added to the instances.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

