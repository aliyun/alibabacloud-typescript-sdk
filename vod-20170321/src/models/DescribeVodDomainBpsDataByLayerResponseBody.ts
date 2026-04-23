// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $dara.Model {
  timeStamp?: string;
  trafficValue?: number;
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

