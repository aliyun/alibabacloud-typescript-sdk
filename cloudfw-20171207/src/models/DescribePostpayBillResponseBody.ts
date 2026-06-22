// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillResponseBodyBillList extends $dara.Model {
  /**
   * @remarks
   * The end time, expressed as a UNIX timestamp in seconds. The value is on the hour or on the day.
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
   * The Internet traffic, in GB.
   * 
   * @example
   * 10
   */
  internetTraffic?: number;
  /**
   * @remarks
   * Indicates whether the bill is waived. A value of 0 indicates that the bill is not waived. Any value greater than 0 indicates that the bill is waived. If the bill is waived, it will not be issued.
   * > This field is meaningful only when you query hourly data.
   * 
   * @example
   * 0
   */
  isDerated?: number;
  /**
   * @remarks
   * The log service usage duration, in TB*h.
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
   * The NAT traffic, in GB.
   * 
   * @example
   * 2
   */
  natTraffic?: number;
  /**
   * @remarks
   * The data leak detection usage duration, in hours.
   * 
   * @example
   * 0
   */
  sdl?: number;
  /**
   * @remarks
   * The sensitive data detection traffic, in GB.
   * 
   * @example
   * 1
   */
  sdlTraffic?: number;
  /**
   * @remarks
   * The start time, expressed as a UNIX timestamp in seconds. The value is on the hour or on the day.
   * 
   * @example
   * 1710206070000
   */
  startTime?: number;
  /**
   * @remarks
   * The threat intelligence usage duration, in hours.
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
   * The VPC traffic, in GB.
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
   * The aggregated Internet traffic, in GB.
   * 
   * @example
   * 10
   */
  aggregateInternetTraffic?: number;
  /**
   * @remarks
   * The aggregated NAT traffic, in GB.
   * 
   * @example
   * 10
   */
  aggregateNatTraffic?: number;
  /**
   * @remarks
   * The aggregated sensitive data detection traffic, in GB.
   * 
   * @example
   * 10
   */
  aggregateSdlTraffic?: number;
  /**
   * @remarks
   * The aggregated total traffic, in GB.
   * 
   * @example
   * 40
   */
  aggregateTotalTraffic?: number;
  /**
   * @remarks
   * The aggregated VPC traffic, in GB.
   * 
   * @example
   * 10
   */
  aggregateVpcTraffic?: number;
  /**
   * @remarks
   * The bill list.
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

