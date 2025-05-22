// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMonitorRuleResponseBodyMonitorRules extends $dara.Model {
  /**
   * @remarks
   * The threshold that triggers the alert.
   * 
   * *   If the request parameter **Type** of the [CreateJobMonitorRule](https://help.aliyun.com/document_detail/212332.html) operation is set to **delay**, the unit of DelayRuleTime is seconds.
   * *   If the request parameter **Type** of the [CreateJobMonitorRule](https://help.aliyun.com/document_detail/212332.html) operation is set to **full_timeout**, the unit of DelayRuleTime is hours.
   * 
   * @example
   * 11
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
  /**
   * @remarks
   * The task type of the DTS instance, with values: - **normal**: Migration or synchronization task. - **full_check**: Associated full check task. - **etl_check**: Associated incremental check task.
   * 
   * @example
   * normal
   */
  jobType?: string;
  /**
   * @remarks
   * Alarm threshold.
   * 
   * @example
   * 2
   */
  noticeValue?: number;
  /**
   * @remarks
   * The statistical period for incremental validation tasks, in minutes.
   * > Currently supported values are 1 minute, 5 minutes, 10 minutes, and 30 minutes.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The mobile phone numbers that receive alert notifications. Multiple mobile numbers are separated by commas (,).
   * 
   * @example
   * 1361234****,1371234****
   */
  phone?: string;
  /**
   * @remarks
   * Indicates whether the monitoring rule is enabled. Valid values:
   * 
   * *   **Y**: The monitoring rule is enabled.
   * *   **N**: The monitoring rule is disabled.
   * 
   * @example
   * Y
   */
  state?: string;
  /**
   * @remarks
   * The number of cycles for the incremental validation task.
   * 
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * The type of the monitoring rule. Valid values:
   * 
   * *   **delay**: If the task latency reaches the threshold, an alert is triggered.
   * *   **error**: If an exception occurs, an alert is triggered.
   * 
   * @example
   * delay
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      delayRuleTime: 'DelayRuleTime',
      jobId: 'JobId',
      jobType: 'JobType',
      noticeValue: 'NoticeValue',
      period: 'Period',
      phone: 'Phone',
      state: 'State',
      times: 'Times',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayRuleTime: 'number',
      jobId: 'string',
      jobType: 'string',
      noticeValue: 'number',
      period: 'number',
      phone: 'string',
      state: 'string',
      times: 'number',
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

