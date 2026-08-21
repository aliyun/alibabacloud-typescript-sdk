// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $dara.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
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

export class DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval extends $dara.Model {
  dataModule?: DescribeVodDomainUsageDataResponseBodyUsageDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainUsageDataResponseBodyUsageDataPerIntervalDataModule },
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

export class DescribeVodDomainUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage region.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The time interval between records. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name information.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2015-12-10T12:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B955107D-E658-4E77-****-E0AC3D31693E
   */
  requestId?: string;
  /**
   * @remarks
   * The start time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2015-12-10T10:20:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * - **bps**: bandwidth.
   *  - **traf**: traffic.
   * 
   * @example
   * bps
   */
  type?: string;
  usageDataPerInterval?: DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      type: 'Type',
      usageDataPerInterval: 'UsageDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      type: 'string',
      usageDataPerInterval: DescribeVodDomainUsageDataResponseBodyUsageDataPerInterval,
    };
  }

  validate() {
    if(this.usageDataPerInterval && typeof (this.usageDataPerInterval as any).validate === 'function') {
      (this.usageDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

