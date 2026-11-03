// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayBillTotalResponseBodyBillList extends $dara.Model {
  /**
   * @remarks
   * The actual billed traffic for sensitive data leak detection.
   * 
   * @example
   * 5
   */
  billedDetectionTraffic?: number;
  /**
   * @remarks
   * The sensitive data detection traffic on the day.
   * 
   * @example
   * 8
   */
  dailyDetectionTraffic?: number;
  /**
   * @remarks
   * The total elastic traffic on the day. Unit: GB.
   * 
   * @example
   * 10
   */
  dailyOverflowTraffic?: number;
  /**
   * @remarks
   * The default bandwidth of the edition. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  defaultBandwidth?: number;
  /**
   * @remarks
   * The elastic bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  elasticBandwidth?: number;
  /**
   * @remarks
   * The end time of the day. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1761667200
   */
  endTime?: number;
  /**
   * @remarks
   * The extra bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  extensionBandwidth?: number;
  /**
   * @remarks
   * The Internet traffic bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 10
   */
  internetTrafficBandwidth?: number;
  /**
   * @remarks
   * The monthly free quota for sensitive data detection. Unit: GB.
   * 
   * @example
   * 10
   */
  monthlyRemainingFreeTraffic?: number;
  /**
   * @remarks
   * The NAT traffic bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 10
   */
  natTrafficBandwidth?: number;
  /**
   * @remarks
   * The timestamp when the total bandwidth (Internet, VPC, and NAT) reaches the maximum value on the day.
   * 
   * @example
   * 1761588300
   */
  overflowTime?: number;
  /**
   * @remarks
   * The start time of the day. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1761580800
   */
  startTime?: number;
  /**
   * @remarks
   * The temporary bandwidth upgrade. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  temporaryBandwidth?: number;
  /**
   * @remarks
   * The VPC traffic bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 10
   */
  vpcTrafficBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      billedDetectionTraffic: 'BilledDetectionTraffic',
      dailyDetectionTraffic: 'DailyDetectionTraffic',
      dailyOverflowTraffic: 'DailyOverflowTraffic',
      defaultBandwidth: 'DefaultBandwidth',
      elasticBandwidth: 'ElasticBandwidth',
      endTime: 'EndTime',
      extensionBandwidth: 'ExtensionBandwidth',
      internetTrafficBandwidth: 'InternetTrafficBandwidth',
      monthlyRemainingFreeTraffic: 'MonthlyRemainingFreeTraffic',
      natTrafficBandwidth: 'NatTrafficBandwidth',
      overflowTime: 'OverflowTime',
      startTime: 'StartTime',
      temporaryBandwidth: 'TemporaryBandwidth',
      vpcTrafficBandwidth: 'VpcTrafficBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billedDetectionTraffic: 'number',
      dailyDetectionTraffic: 'number',
      dailyOverflowTraffic: 'number',
      defaultBandwidth: 'number',
      elasticBandwidth: 'number',
      endTime: 'number',
      extensionBandwidth: 'number',
      internetTrafficBandwidth: 'number',
      monthlyRemainingFreeTraffic: 'number',
      natTrafficBandwidth: 'number',
      overflowTime: 'number',
      startTime: 'number',
      temporaryBandwidth: 'number',
      vpcTrafficBandwidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrepayBillTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bill list aggregated by day.
   */
  billList?: DescribePrepayBillTotalResponseBodyBillList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 450D47F5-956E-543E-8502-***********
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      billList: 'BillList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billList: { 'type': 'array', 'itemType': DescribePrepayBillTotalResponseBodyBillList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.billList)) {
      $dara.Model.validateArray(this.billList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

