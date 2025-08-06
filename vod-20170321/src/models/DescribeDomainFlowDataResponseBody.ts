// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainFlowDataResponseBodyFlowDataPerIntervalDataModule extends $dara.Model {
  domesticValue?: string;
  dynamicDomesticValue?: string;
  dynamicOverseasValue?: string;
  dynamicValue?: string;
  overseasValue?: string;
  staticDomesticValue?: string;
  staticOverseasValue?: string;
  staticValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      dynamicDomesticValue: 'DynamicDomesticValue',
      dynamicOverseasValue: 'DynamicOverseasValue',
      dynamicValue: 'DynamicValue',
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
      domesticValue: 'string',
      dynamicDomesticValue: 'string',
      dynamicOverseasValue: 'string',
      dynamicValue: 'string',
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

export class DescribeDomainFlowDataResponseBodyFlowDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainFlowDataResponseBodyFlowDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainFlowDataResponseBodyFlowDataPerIntervalDataModule },
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

export class DescribeDomainFlowDataResponseBody extends $dara.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  flowDataPerInterval?: DescribeDomainFlowDataResponseBodyFlowDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      flowDataPerInterval: 'FlowDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      flowDataPerInterval: DescribeDomainFlowDataResponseBodyFlowDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.flowDataPerInterval && typeof (this.flowDataPerInterval as any).validate === 'function') {
      (this.flowDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

