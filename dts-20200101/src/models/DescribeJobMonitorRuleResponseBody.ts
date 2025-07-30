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

export class DescribeJobMonitorRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter will be removed in the future.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * ta7w132u12h****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * >  If the specified **DtsJobId** parameter is invalid, **The Value of Input Parameter %s is not valid** is returned for **ErrMessage** and **DtsJobId** is returned for **DynamicMessage**.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 403
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The monitoring rules of the DTS task.
   */
  monitorRules?: DescribeJobMonitorRuleResponseBodyMonitorRules[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CA14388-DD89-4A7B-8CDD-884A10CE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The call was successful.
   * *   **false**:The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The topics of all subtasks in the distributed change tracking task.
   */
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      monitorRules: 'MonitorRules',
      requestId: 'RequestId',
      success: 'Success',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      monitorRules: { 'type': 'array', 'itemType': DescribeJobMonitorRuleResponseBodyMonitorRules },
      requestId: 'string',
      success: 'boolean',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.monitorRules)) {
      $dara.Model.validateArray(this.monitorRules);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

