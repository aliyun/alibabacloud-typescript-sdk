// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayBillTotalResponseBodyBillList extends $dara.Model {
  /**
   * @example
   * 5
   */
  billedDetectionTraffic?: number;
  /**
   * @example
   * 8
   */
  dailyDetectionTraffic?: number;
  /**
   * @example
   * 10
   */
  dailyOverflowTraffic?: number;
  /**
   * @example
   * 200
   */
  defaultBandwidth?: number;
  /**
   * @example
   * 200
   */
  elasticBandwidth?: number;
  /**
   * @example
   * 1761667200
   */
  endTime?: number;
  /**
   * @example
   * 10
   */
  extensionBandwidth?: number;
  /**
   * @example
   * 10
   */
  internetTrafficBandwidth?: number;
  /**
   * @example
   * 10
   */
  monthlyRemainingFreeTraffic?: number;
  /**
   * @example
   * 10
   */
  natTrafficBandwidth?: number;
  /**
   * @example
   * 1761588300
   */
  overflowTime?: number;
  /**
   * @example
   * 1761580800
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  temporaryBandwidth?: number;
  /**
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
  billList?: DescribePrepayBillTotalResponseBodyBillList[];
  /**
   * @example
   * 450D47F5-956E-543E-8502-***********
   */
  requestId?: string;
  /**
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

