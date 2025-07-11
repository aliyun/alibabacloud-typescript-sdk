// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 128
   */
  devicesDataValue?: string;
  /**
   * @example
   * 2022-01-04T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      devicesDataValue: 'DevicesDataValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicesDataValue: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataResponseBodyDevicesDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

