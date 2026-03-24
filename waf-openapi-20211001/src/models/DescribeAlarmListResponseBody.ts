// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmListResponseBodyAlarms extends $dara.Model {
  /**
   * @remarks
   * The cause of the alert. Valid values:
   * 
   * - **fivefold**: The QPS exceeds the limit of the current WAF instance specifications.
   * 
   * - **4count**: The actual QPS has cumulatively exceeded the limit of the current WAF instance specifications.
   * 
   * - **exceed10w**: The peak QPS exceeds 100,000.
   * 
   * - **costProtection**: Billing protection is triggered.
   * 
   * @example
   * 4count
   */
  cause?: string;
  /**
   * @remarks
   * The end time of the alert. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1605600798
   */
  endTime?: number;
  /**
   * @remarks
   * The peak QPS during the alert period.
   * 
   * @example
   * 12000
   */
  maxQps?: number;
  /**
   * @remarks
   * The QPS limit of the current WAF instance specifications.
   * 
   * @example
   * 10000
   */
  spec?: number;
  /**
   * @remarks
   * The start time of the alert. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1605600767
   */
  startTime?: number;
  /**
   * @remarks
   * The current status of the alert. Valid values:
   * 
   * - **1**: The queries per second (QPS) limit is exceeded.
   * 
   * - **2**: The WAF instance enters the sandbox.
   * 
   * - **3**: The WAF instance is removed from the sandbox.
   * 
   * - **4**: The QPS no longer exceeds the limit.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the alert. Valid value:
   * 
   * - **qps**: a QPS alert.
   * 
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
  /**
   * @remarks
   * The alerts.
   */
  alarms?: DescribeAlarmListResponseBodyAlarms[];
  /**
   * @remarks
   * The request ID.
   * 
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

