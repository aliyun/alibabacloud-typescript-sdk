// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafUsageDataResponseBodyWafUsageDataWafUsageDataItem extends $dara.Model {
  /**
   * @remarks
   * The number of blocked requests.
   * 
   * @example
   * 600
   */
  accessCnt?: number;
  /**
   * @remarks
   * The number of allowed requests.
   * 
   * @example
   * 300
   */
  blockCnt?: number;
  /**
   * @remarks
   * The domain name that you want to query. If you do not specify an accelerated domain name, all accelerated domain names are queried by default.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 300
   */
  observeCnt?: number;
  /**
   * @remarks
   * The time granularity for a query. Unit: seconds.
   * 
   * The time granularity varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day).
   * 
   * @example
   * 50
   */
  secCu?: number;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      accessCnt: 'AccessCnt',
      blockCnt: 'BlockCnt',
      domain: 'Domain',
      observeCnt: 'ObserveCnt',
      secCu: 'SecCu',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCnt: 'number',
      blockCnt: 'number',
      domain: 'string',
      observeCnt: 'number',
      secCu: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataResponseBodyWafUsageData extends $dara.Model {
  wafUsageDataItem?: DescribeDcdnWafUsageDataResponseBodyWafUsageDataWafUsageDataItem[];
  static names(): { [key: string]: string } {
    return {
      wafUsageDataItem: 'WafUsageDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wafUsageDataItem: { 'type': 'array', 'itemType': DescribeDcdnWafUsageDataResponseBodyWafUsageDataWafUsageDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.wafUsageDataItem)) {
      $dara.Model.validateArray(this.wafUsageDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DescribeDcdnWafUsageData**.
   * 
   * @example
   * 2018-10-01T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies how query results are grouped. By default, this parameter is empty. Valid values:
   * 
   * *   domain: Query results are grouped by accelerated domain name.
   * *   An empty string: Query results are not grouped.
   * 
   * @example
   * CB1A380B-09F0-41BB-802B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * 2018-09-30T16:00:00Z",
   */
  startTime?: string;
  /**
   * @remarks
   * The number of monitored requests.
   */
  wafUsageData?: DescribeDcdnWafUsageDataResponseBodyWafUsageData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      wafUsageData: 'WafUsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      wafUsageData: DescribeDcdnWafUsageDataResponseBodyWafUsageData,
    };
  }

  validate() {
    if(this.wafUsageData && typeof (this.wafUsageData as any).validate === 'function') {
      (this.wafUsageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

