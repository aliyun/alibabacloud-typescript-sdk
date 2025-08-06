// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  domesticL2Value?: string;
  domesticValue?: string;
  dynamicDomesticValue?: string;
  dynamicOverseasValue?: string;
  dynamicValue?: number;
  l2Value?: string;
  overseasL2Value?: string;
  overseasValue?: string;
  staticDomesticValue?: string;
  staticOverseasValue?: string;
  staticValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticL2Value: 'DomesticL2Value',
      domesticValue: 'DomesticValue',
      dynamicDomesticValue: 'DynamicDomesticValue',
      dynamicOverseasValue: 'DynamicOverseasValue',
      dynamicValue: 'DynamicValue',
      l2Value: 'L2Value',
      overseasL2Value: 'OverseasL2Value',
      overseasValue: 'OverseasValue',
      staticDomesticValue: 'StaticDomesticValue',
      staticOverseasValue: 'StaticOverseasValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticL2Value: 'string',
      domesticValue: 'string',
      dynamicDomesticValue: 'string',
      dynamicOverseasValue: 'string',
      dynamicValue: 'number',
      l2Value: 'string',
      overseasL2Value: 'string',
      overseasValue: 'string',
      staticDomesticValue: 'string',
      staticOverseasValue: 'string',
      staticValue: 'string',
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

export class DescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
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

export class DescribeDomainBpsDataResponseBodySupplyBpsDatasDataModule extends $dara.Model {
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

export class DescribeDomainBpsDataResponseBodySupplyBpsDatas extends $dara.Model {
  dataModule?: DescribeDomainBpsDataResponseBodySupplyBpsDatasDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodySupplyBpsDatasDataModule },
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

export class DescribeDomainBpsDataResponseBody extends $dara.Model {
  bpsDataPerInterval?: DescribeDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  supplyBpsDatas?: DescribeDomainBpsDataResponseBodySupplyBpsDatas;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      supplyBpsDatas: 'SupplyBpsDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      supplyBpsDatas: DescribeDomainBpsDataResponseBodySupplyBpsDatas,
    };
  }

  validate() {
    if(this.bpsDataPerInterval && typeof (this.bpsDataPerInterval as any).validate === 'function') {
      (this.bpsDataPerInterval as any).validate();
    }
    if(this.supplyBpsDatas && typeof (this.supplyBpsDatas as any).validate === 'function') {
      (this.supplyBpsDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

