// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyStatusAdbpgInstanceColdDataGb extends $dara.Model {
  /**
   * @remarks
   * The total amount of cold data storage. Unit: GB.
   * 
   * @example
   * 0
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

