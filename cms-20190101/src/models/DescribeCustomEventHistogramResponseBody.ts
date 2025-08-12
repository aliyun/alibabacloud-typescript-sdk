// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram extends $dara.Model {
  /**
   * @remarks
   * The information about the number of times that the custom event occurred during an interval of the specified time period.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The end time.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552226750000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552226740000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBodyEventHistograms extends $dara.Model {
  eventHistogram?: DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram[];
  static names(): { [key: string]: string } {
    return {
      eventHistogram: 'EventHistogram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventHistogram: { 'type': 'array', 'itemType': DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram },
    };
  }

  validate() {
    if(Array.isArray(this.eventHistogram)) {
      $dara.Model.validateArray(this.eventHistogram);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the number of times that the custom event occurred during each interval of the specified time period.
   */
  eventHistograms?: DescribeCustomEventHistogramResponseBodyEventHistograms;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 486029C9-53E1-44B4-85A8-16A571A043FD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventHistograms: 'EventHistograms',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventHistograms: DescribeCustomEventHistogramResponseBodyEventHistograms,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.eventHistograms && typeof (this.eventHistograms as any).validate === 'function') {
      (this.eventHistograms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

