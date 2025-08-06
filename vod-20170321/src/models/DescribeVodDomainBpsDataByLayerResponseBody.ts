// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-02-08T10:09:19Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 1000
   */
  trafficValue?: number;
  /**
   * @remarks
   * The peak bandwidth. Unit: bit/s.
   * 
   * @example
   * 75.33
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'number',
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

export class DescribeVodDomainBpsDataByLayerResponseBodyBpsDataInterval extends $dara.Model {
  dataModule?: DescribeVodDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
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

export class DescribeVodDomainBpsDataByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth returned at each time interval. Unit: bit/s.
   */
  bpsDataInterval?: DescribeVodDomainBpsDataByLayerResponseBodyBpsDataInterval;
  /**
   * @remarks
   * The time interval between the entries returned. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataInterval: 'BpsDataInterval',
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataInterval: DescribeVodDomainBpsDataByLayerResponseBodyBpsDataInterval,
      dataInterval: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.bpsDataInterval && typeof (this.bpsDataInterval as any).validate === 'function') {
      (this.bpsDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

