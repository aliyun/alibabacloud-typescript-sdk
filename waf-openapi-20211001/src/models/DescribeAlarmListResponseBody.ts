// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmListResponseBodyAlarms extends $dara.Model {
  /**
   * @example
   * 4count
   */
  cause?: string;
  /**
   * @example
   * 1605600798
   */
  endTime?: number;
  /**
   * @example
   * 12000
   */
  maxQps?: number;
  /**
   * @example
   * 10000
   */
  spec?: number;
  /**
   * @example
   * 1605600767
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * qps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      endTime: 'EndTime',
      maxQps: 'MaxQps',
      spec: 'Spec',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      endTime: 'number',
      maxQps: 'number',
      spec: 'number',
      startTime: 'number',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmListResponseBody extends $dara.Model {
  alarms?: DescribeAlarmListResponseBodyAlarms[];
  /**
   * @example
   * 8D8EBFB7-E1EB-5236-952A-092EDC72***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': DescribeAlarmListResponseBodyAlarms },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

