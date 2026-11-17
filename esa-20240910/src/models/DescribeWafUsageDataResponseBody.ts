// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafUsageDataResponseBodyUsageData extends $dara.Model {
  /**
   * @remarks
   * The number of normal access requests.
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
   * The name of the domain name record.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The start time of the time slice.
   * 
   * The time is displayed in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
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
   * The end time of the retrieved data. The time is displayed in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2022-08-10T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D2***
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the data to retrieve. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

