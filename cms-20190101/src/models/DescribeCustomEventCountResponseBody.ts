// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount extends $dara.Model {
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * BABEL_BUY
   */
  name?: string;
  /**
   * @remarks
   * The number of times that the custom event occurred.
   * 
   * @example
   * 20
   */
  num?: number;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552267615000
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBodyCustomEventCounts extends $dara.Model {
  customEventCount?: DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount[];
  static names(): { [key: string]: string } {
    return {
      customEventCount: 'CustomEventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEventCount: { 'type': 'array', 'itemType': DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount },
    };
  }

  validate() {
    if(Array.isArray(this.customEventCount)) {
      $dara.Model.validateArray(this.customEventCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBody extends $dara.Model {
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
   * The details of the custom event.
   */
  customEventCounts?: DescribeCustomEventCountResponseBodyCustomEventCounts;
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
   * 60912C8D-B340-4253-ADE7-61ACDFD25CFC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEventCounts: 'CustomEventCounts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEventCounts: DescribeCustomEventCountResponseBodyCustomEventCounts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.customEventCounts && typeof (this.customEventCounts as any).validate === 'function') {
      (this.customEventCounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

