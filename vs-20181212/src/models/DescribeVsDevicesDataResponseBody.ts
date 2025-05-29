// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDevicesDataResponseBodyDevicesDataPerInterval } from "./DescribeVsDevicesDataResponseBodyDevicesDataPerInterval";


export class DescribeVsDevicesDataResponseBody extends $dara.Model {
  devicesDataPerInterval?: DescribeVsDevicesDataResponseBodyDevicesDataPerInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devicesDataPerInterval: 'DevicesDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicesDataPerInterval: DescribeVsDevicesDataResponseBodyDevicesDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.devicesDataPerInterval && typeof (this.devicesDataPerInterval as any).validate === 'function') {
      (this.devicesDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

