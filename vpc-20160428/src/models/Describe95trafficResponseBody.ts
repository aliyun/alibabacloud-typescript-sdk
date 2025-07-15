// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail extends $dara.Model {
  /**
   * @remarks
   * The sampled bandwidth value, which is the larger bandwidth value in the inbound and outbound directions within a sampling interval. Unit: Mbit/s.
   * 
   * @example
   * 118.5090322113037
   */
  billBandwidth?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 118.5090322113037
   */
  inBandwidth?: string;
  /**
   * @remarks
   * The outbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 96.41217480977376
   */
  outBandwidth?: string;
  /**
   * @remarks
   * The statistical time. The value is a string.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      billBandwidth: 'BillBandwidth',
      inBandwidth: 'InBandwidth',
      outBandwidth: 'OutBandwidth',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBandwidth: 'string',
      inBandwidth: 'string',
      outBandwidth: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailList extends $dara.Model {
  traffic95Detail?: Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail[];
  static names(): { [key: string]: string } {
    return {
      traffic95Detail: 'Traffic95Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic95Detail: { 'type': 'array', 'itemType': Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail },
    };
  }

  validate() {
    if(Array.isArray(this.traffic95Detail)) {
      $dara.Model.validateArray(this.traffic95Detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Describe95TrafficResponseBodyTraffic95Summary extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
   * 
   * @example
   * 20000.0
   */
  bandwidth?: number;
  /**
   * @remarks
   * The daily peak bandwidth. Unit: Mbit/s.
   * <props="china"> For more information, see [Daily peak bandwidth](https://help.aliyun.com/document_detail/89729.html).
   * 
   * @example
   * 1064.244837773641
   */
  fifthPeakBandwidth?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * cbwp-wz9j19xrwf78fvz7*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   PayBy95: pay-by-enhanced-95th-percentile
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByDominantTraffic: pay-by-dominant-traffic
   * 
   * @example
   * PayBy95
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The guaranteed bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
   * 
   * @example
   * 0.0
   */
  minimumConsumeBandwidth?: string;
  /**
   * @remarks
   * The average bandwidth every 5 minutes in the inbound and outbound directions.
   */
  traffic95DetailList?: Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailList;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      fifthPeakBandwidth: 'FifthPeakBandwidth',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      minimumConsumeBandwidth: 'MinimumConsumeBandwidth',
      traffic95DetailList: 'Traffic95DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      fifthPeakBandwidth: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      minimumConsumeBandwidth: 'string',
      traffic95DetailList: Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailList,
    };
  }

  validate() {
    if(this.traffic95DetailList && typeof (this.traffic95DetailList as any).validate === 'function') {
      (this.traffic95DetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Describe95TrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned.
   */
  traffic95Summary?: Describe95TrafficResponseBodyTraffic95Summary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traffic95Summary: 'Traffic95Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traffic95Summary: Describe95TrafficResponseBodyTraffic95Summary,
    };
  }

  validate() {
    if(this.traffic95Summary && typeof (this.traffic95Summary as any).validate === 'function') {
      (this.traffic95Summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

