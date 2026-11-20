// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmListResponseBodyAlarms extends $dara.Model {
  /**
   * @remarks
   * The cause of the alert. Valid values:
   * 
   * - **fivefold**: The service QPS exceeds the current specifications.
   * - **4count**: The cumulative actual service QPS exceeds the current specifications.
   * - **exceed10w**: The actual peak service QPS exceeds 100,000.
   * - **costProtection**: Billing protection is triggered.
   * 
   * @example
   * 4count
   */
  cause?: string;
  /**
   * @remarks
   * The end time of the alert. The value is a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * @example
   * 1605600798
   */
  endTime?: number;
  /**
   * @remarks
   * The peak QPS.
   * 
   * @example
   * 12000
   */
  maxQps?: number;
  /**
   * @remarks
   * The current specifications.
   * 
   * @example
   * 10000
   */
  spec?: number;
  /**
   * @remarks
   * The start time of the alert. The value is a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * @example
   * 1605600767
   */
  startTime?: number;
  /**
   * @remarks
   * The current status of the alert. Valid values:
   * 
   * - **1**: The QPS limit is exceeded.
   * - **2**: The instance is added to the sandbox.
   * - **3**: The instance is removed from the sandbox.
   * - **4**: The QPS limit is no longer exceeded.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The Alarm Metric for alerting. Valid values:
   * 
   * - **qps**: The QPS alerts for the service.
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
   * The alert list.
   */
  alarms?: DescribeAlarmListResponseBodyAlarms[];
  /**
   * @remarks
   * The ID of the request.
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

