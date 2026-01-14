// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationMonitorResponseBodyApplicationMonitors extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance on which the origin probing task runs.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The URL or IP address that was probed.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * Indicates whether the automatic diagnostics feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  detectEnable?: boolean;
  /**
   * @remarks
   * The threshold that is used to trigger the automatic diagnostics feature.
   * 
   * @example
   * １
   */
  detectThreshold?: number;
  /**
   * @remarks
   * The number of times that are required to reach the threshold before the automatic diagnostics feature can be triggered.
   * 
   * @example
   * １
   */
  detectTimes?: number;
  /**
   * @remarks
   * The ID of the listener on which the origin probing task runs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
   * 
   * @example
   * { "http_method": "get","header": "key:asd","acceptable_response_code": "500","cert_verify": true }
   */
  optionsJson?: string;
  /**
   * @remarks
   * The silence period of the automatic diagnostics feature. This parameter indicates the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.
   * 
   * If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of **DetectTimes** , the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate stays below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.
   * 
   * Unit: seconds.
   * 
   * @example
   * 300
   */
  silenceTime?: number;
  /**
   * @remarks
   * The status of the origin probing task. Valid values:
   * 
   * *   **active:** The origin probing task is running.
   * *   **inactive:** The origin probing task is stopped.
   * *   **init:** The origin probing task is being initialized.
   * *   **deleting:** The origin probing task is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The origin probing task ID.
   * 
   * @example
   * sm-bp1fpdjfju9k8yr1y****
   */
  taskId?: string;
  /**
   * @remarks
   * The origin probing task name.
   * 
   * @example
   * task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      silenceTime: 'SilenceTime',
      state: 'State',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      listenerId: 'string',
      optionsJson: 'string',
      silenceTime: 'number',
      state: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of origin probing tasks.
   */
  applicationMonitors?: ListApplicationMonitorResponseBodyApplicationMonitors[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationMonitors: 'ApplicationMonitors',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationMonitors: { 'type': 'array', 'itemType': ListApplicationMonitorResponseBodyApplicationMonitors },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationMonitors)) {
      $dara.Model.validateArray(this.applicationMonitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

