// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodEditingUsageDataResponseBodyEditingData extends $dara.Model {
  /**
   * @remarks
   * The audio or video duration. Unit: seconds.
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The output specification.
   * 
   * @example
   * H264.SD
   */
  specification?: string;
  /**
   * @remarks
   * The start time of the time interval. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2024-11-06T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      region: 'Region',
      specification: 'Specification',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      region: 'string',
      specification: 'string',
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

export class DescribeVodEditingUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage data.
   */
  editingData?: DescribeVodEditingUsageDataResponseBodyEditingData[];
  /**
   * @remarks
   * The end of the time range to query. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2024-11-07T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CB55B62-6E5F-54D1-80BF-DFA3DE9F0***
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2024-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      editingData: 'EditingData',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingData: { 'type': 'array', 'itemType': DescribeVodEditingUsageDataResponseBodyEditingData },
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.editingData)) {
      $dara.Model.validateArray(this.editingData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

