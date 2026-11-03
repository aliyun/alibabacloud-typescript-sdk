// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillResponseBodyBillList extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is a UNIX timestamp accurate to seconds, representing a full hour or a full day.
   * 
   * @example
   * 1733710015
   */
  endTime?: number;
  /**
   * @remarks
   * The number of Internet instances.
   * 
   * @example
   * 3
   */
  internetInstanceCnt?: number;
  /**
   * @remarks
   * The Internet traffic. Unit: GB.
   * 
   * @example
   * 10
   */
  internetTraffic?: number;
  /**
   * @remarks
   * Indicates whether the fee is reduced. A value of 0 indicates that the fee is not reduced. A value greater than 0 indicates that the fee is reduced. If the fee is reduced, no bill is generated.
   * > This parameter is valid only when you query hourly data.
   * 
   * @example
   * 0
   */
  isDerated?: number;
  /**
   * @remarks
   * The usage duration of Simple Log Service. Unit: TB × h.
   * 
   * @example
   * 24
   */
  logStorage?: number;
  /**
   * @remarks
   * The number of NAT instances.
   * 
   * @example
   * 2
   */
  natInstanceCnt?: number;
  /**
   * @remarks
   * The NAT traffic. Unit: GB.
   * 
   * @example
   * 2
   */
  natTraffic?: number;
  /**
   * @remarks
   * The usage duration of sensitive data leak detection. Unit: h.
   * 
   * @example
   * 0
   */
  sdl?: number;
  /**
   * @remarks
   * The sensitive data detection traffic. Unit: GB.
   * 
   * @example
   * 1
   */
  sdlTraffic?: number;
  /**
   * @remarks
   * The start time. The time is a UNIX timestamp accurate to seconds, representing a full hour or a full day.
   * 
   * @example
   * 1710206070000
   */
  startTime?: number;
  /**
   * @remarks
   * The usage duration of threat intelligence. Unit: h.
   * 
   * @example
   * 1
   */
  threatIntelligence?: number;
  /**
   * @remarks
   * The number of VPC instances.
   * 
   * @example
   * 2
   */
  vpcInstanceCnt?: number;
  /**
   * @remarks
   * The VPC traffic. Unit: GB.
   * 
   * @example
   * 4
   */
  vpcTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      internetInstanceCnt: 'InternetInstanceCnt',
      internetTraffic: 'InternetTraffic',
      isDerated: 'IsDerated',
      logStorage: 'LogStorage',
      natInstanceCnt: 'NatInstanceCnt',
      natTraffic: 'NatTraffic',
      sdl: 'Sdl',
      sdlTraffic: 'SdlTraffic',
      startTime: 'StartTime',
      threatIntelligence: 'ThreatIntelligence',
      vpcInstanceCnt: 'VpcInstanceCnt',
      vpcTraffic: 'VpcTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      internetInstanceCnt: 'number',
      internetTraffic: 'number',
      isDerated: 'number',
      logStorage: 'number',
      natInstanceCnt: 'number',
      natTraffic: 'number',
      sdl: 'number',
      sdlTraffic: 'number',
      startTime: 'number',
      threatIntelligence: 'number',
      vpcInstanceCnt: 'number',
      vpcTraffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The aggregated Internet traffic. Unit: GB.
   * 
   * @example
   * 10
   */
  aggregateInternetTraffic?: number;
  /**
   * @remarks
   * The aggregated NAT traffic. Unit: GB.
   * 
   * @example
   * 10
   */
  aggregateNatTraffic?: number;
  /**
   * @remarks
   * The aggregated sensitive data detection traffic. Unit: GB.
   * 
   * @example
   * 10
   */
  aggregateSdlTraffic?: number;
  /**
   * @remarks
   * The aggregated total traffic. Unit: GB.
   * 
   * @example
   * 40
   */
  aggregateTotalTraffic?: number;
  /**
   * @remarks
   * The aggregated VPC traffic. Unit: GB.
   * 
   * @example
   * 10
   */
  aggregateVpcTraffic?: number;
  /**
   * @remarks
   * The list of bills.
   */
  billList?: DescribePostpayBillResponseBodyBillList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 133173B9-8010-5DF5-8B93-********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aggregateInternetTraffic: 'AggregateInternetTraffic',
      aggregateNatTraffic: 'AggregateNatTraffic',
      aggregateSdlTraffic: 'AggregateSdlTraffic',
      aggregateTotalTraffic: 'AggregateTotalTraffic',
      aggregateVpcTraffic: 'AggregateVpcTraffic',
      billList: 'BillList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateInternetTraffic: 'number',
      aggregateNatTraffic: 'number',
      aggregateSdlTraffic: 'number',
      aggregateTotalTraffic: 'number',
      aggregateVpcTraffic: 'number',
      billList: { 'type': 'array', 'itemType': DescribePostpayBillResponseBodyBillList },
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

