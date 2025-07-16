// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2020-05-06T07:10:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total amount of network traffic. Unit: bytes.
   * 
   * @example
   * 2838
   */
  trafficValue?: string;
  /**
   * @remarks
   * The peak bandwidth value. Unit: bit/s.
   * 
   * @example
   * 75.68
   */
  value?: string;
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
      trafficValue: 'string',
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

export class DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval extends $dara.Model {
  dataModule?: DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
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

export class DescribeDomainBpsDataByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned at each time interval.
   */
  bpsDataInterval?: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval;
  /**
   * @remarks
   * The time interval between the data entries. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C565B910-BC3B-467B-9046-2A48566EA967
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
      bpsDataInterval: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval,
      dataInterval: 'string',
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

