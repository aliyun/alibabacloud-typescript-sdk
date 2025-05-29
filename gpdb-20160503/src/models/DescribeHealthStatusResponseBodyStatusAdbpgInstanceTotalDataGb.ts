// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceTotalDataGb extends $dara.Model {
  /**
   * @remarks
   * The total amount of data storage of the instance. Unit: GB.
   * 
   * @example
   * 4.1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

