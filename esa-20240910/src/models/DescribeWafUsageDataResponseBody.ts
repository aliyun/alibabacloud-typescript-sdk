// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafUsageDataResponseBodyUsageData extends $dara.Model {
  /**
   * @remarks
   * The number of requests with normal access.
   * 
   * @example
   * 123
   */
  accessCount?: number;
  /**
   * @remarks
   * The number of blocked requests.
   * 
   * @example
   * 123
   */
  blockCount?: number;
  /**
   * @remarks
   * The number of observed requests.
   * 
   * @example
   * 123
   */
  observeCount?: number;
  /**
   * @remarks
   * The domain record name.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The beginning of the time interval.
   * 
   * @example
   * 2022-08-10T00:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      blockCount: 'BlockCount',
      observeCount: 'ObserveCount',
      recordName: 'RecordName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      blockCount: 'number',
      observeCount: 'number',
      recordName: 'string',
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

export class DescribeWafUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range for the returned data. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC+0.
   * 
   * @example
   * 2022-08-10T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D2***
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2022-08-10T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The returned data.
   */
  usageData?: DescribeWafUsageDataResponseBodyUsageData[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      usageData: { 'type': 'array', 'itemType': DescribeWafUsageDataResponseBodyUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

