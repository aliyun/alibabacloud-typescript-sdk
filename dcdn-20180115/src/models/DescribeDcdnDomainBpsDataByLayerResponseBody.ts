// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The traffic that is used to deliver dynamic content. Unit: bytes.
   * 
   * @example
   * 200
   */
  dynamicTrafficValue?: string;
  /**
   * @remarks
   * The bandwidth that is used to deliver dynamic content. Unit: bit/s.
   * 
   * @example
   * 0.34
   */
  dynamicValue?: string;
  /**
   * @remarks
   * The traffic that is used to deliver static content. Unit: bytes.
   * 
   * @example
   * 131
   */
  staticTrafficValue?: string;
  /**
   * @remarks
   * The bandwidth that is used to deliver static content. Unit: bit/s.
   * 
   * @example
   * 0.22
   */
  staticValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T21:00:00Z
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
   * The total bandwidth. Unit: bit/s.
   * 
   * @example
   * 0.56
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTrafficValue: 'DynamicTrafficValue',
      dynamicValue: 'DynamicValue',
      staticTrafficValue: 'StaticTrafficValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTrafficValue: 'string',
      dynamicValue: 'string',
      staticTrafficValue: 'string',
      staticValue: 'string',
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

export class DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
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

export class DescribeDcdnDomainBpsDataByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth returned at each time interval.
   */
  bpsDataInterval?: DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataInterval;
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
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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
      bpsDataInterval: DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataInterval,
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

