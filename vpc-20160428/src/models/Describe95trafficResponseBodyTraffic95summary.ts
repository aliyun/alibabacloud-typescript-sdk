// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailList } from "./Describe95trafficResponseBodyTraffic95summaryTraffic95detailList";


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

