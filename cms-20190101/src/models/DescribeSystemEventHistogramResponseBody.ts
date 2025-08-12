// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram extends $dara.Model {
  /**
   * @remarks
   * The number of times the system event occurred.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The end time.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552225753000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552225770000
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

export class DescribeSystemEventHistogramResponseBodySystemEventHistograms extends $dara.Model {
  systemEventHistogram?: DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram[];
  static names(): { [key: string]: string } {
    return {
      systemEventHistogram: 'SystemEventHistogram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEventHistogram: { 'type': 'array', 'itemType': DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram },
    };
  }

  validate() {
    if(Array.isArray(this.systemEventHistogram)) {
      $dara.Model.validateArray(this.systemEventHistogram);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The Request is not authorization.
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
   * Indicates whether the request was successful. Valid values: true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The information about the number of times the system event occurred during each interval of a time period.
   */
  systemEventHistograms?: DescribeSystemEventHistogramResponseBodySystemEventHistograms;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEventHistograms: 'SystemEventHistograms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEventHistograms: DescribeSystemEventHistogramResponseBodySystemEventHistograms,
    };
  }

  validate() {
    if(this.systemEventHistograms && typeof (this.systemEventHistograms as any).validate === 'function') {
      (this.systemEventHistograms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

