// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailDataByLayerResponseBodyDataDataModule extends $dara.Model {
  acc?: number;
  bps?: number;
  domainName?: string;
  httpCode?: string;
  ipv6Acc?: number;
  ipv6Bps?: number;
  ipv6Qps?: number;
  ipv6Traf?: number;
  qps?: number;
  timeStamp?: string;
  traf?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      bps: 'Bps',
      domainName: 'DomainName',
      httpCode: 'HttpCode',
      ipv6Acc: 'Ipv6Acc',
      ipv6Bps: 'Ipv6Bps',
      ipv6Qps: 'Ipv6Qps',
      ipv6Traf: 'Ipv6Traf',
      qps: 'Qps',
      timeStamp: 'TimeStamp',
      traf: 'Traf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      bps: 'number',
      domainName: 'string',
      httpCode: 'string',
      ipv6Acc: 'number',
      ipv6Bps: 'number',
      ipv6Qps: 'number',
      ipv6Traf: 'number',
      qps: 'number',
      timeStamp: 'string',
      traf: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponseBodyData extends $dara.Model {
  dataModule?: DescribeDomainDetailDataByLayerResponseBodyDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainDetailDataByLayerResponseBodyDataDataModule },
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

export class DescribeDomainDetailDataByLayerResponseBody extends $dara.Model {
  data?: DescribeDomainDetailDataByLayerResponseBodyData;
  /**
   * @remarks
   * The number of queries per second.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDomainDetailDataByLayerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

