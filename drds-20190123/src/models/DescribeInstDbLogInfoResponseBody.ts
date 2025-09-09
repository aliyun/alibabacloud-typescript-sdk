// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstDbLogInfoResponseBodyLogTimeRange extends $dara.Model {
  /**
   * @remarks
   * The start time of the query time range.
   * 
   * @example
   * 1568267711
   */
  supportLatestTime?: number;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 1568367711
   */
  supportOldestTime?: number;
  static names(): { [key: string]: string } {
    return {
      supportLatestTime: 'SupportLatestTime',
      supportOldestTime: 'SupportOldestTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportLatestTime: 'number',
      supportOldestTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time range for log query.
   */
  logTimeRange?: DescribeInstDbLogInfoResponseBodyLogTimeRange;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5438952-70EE-4FA5-87A9-080DB0ASD45F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      logTimeRange: 'LogTimeRange',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTimeRange: DescribeInstDbLogInfoResponseBodyLogTimeRange,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logTimeRange && typeof (this.logTimeRange as any).validate === 'function') {
      (this.logTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

