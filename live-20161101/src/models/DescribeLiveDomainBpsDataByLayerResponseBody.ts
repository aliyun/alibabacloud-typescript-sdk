// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2022-03-15T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 331
   */
  trafficValue?: string;
  /**
   * @remarks
   * The peak bandwidth. Unit: bit/s.
   * 
   * @example
   * 0.56
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

export class DescribeLiveDomainBpsDataByLayerResponseBodyBpsDataInterval extends $dara.Model {
  dataModule?: DescribeLiveDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
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

export class DescribeLiveDomainBpsDataByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned at each time interval.
   */
  bpsDataInterval?: DescribeLiveDomainBpsDataByLayerResponseBodyBpsDataInterval;
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-2A48566EA967
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
      bpsDataInterval: DescribeLiveDomainBpsDataByLayerResponseBodyBpsDataInterval,
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

