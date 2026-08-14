// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMonitorRuleResponseBodyMonitorRules extends $dara.Model {
  /**
   * @remarks
   * The threshold that triggers a latency alert. Unit: seconds.
   * 
   * @example
   * 60
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * - **normal**: data migration or data synchronization task.
   * - **full_check**: associated full data validation task.
   * - **etl_check**: associated incremental data validation task.
   * 
   * @example
   * normal
   */
  jobType?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 2
   */
  noticeValue?: number;
  /**
   * @remarks
   * The statistical period of the incremental data validation task. Unit: minutes.
   * 
   * > Valid values: 1, 5, 10, and 30 minutes.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The phone numbers of the contacts to be notified when an alert is triggered. Multiple phone numbers are separated by commas (,).
   * 
   * @example
   * 1361234****,1371234****
   */
  phone?: string;
  /**
   * @remarks
   * Indicates whether the monitoring rule is enabled. Valid values:
   * 
   * - **Y**: enabled.
   * - **N**: disabled.
   * 
   * @example
   * Y
   */
  state?: string;
  /**
   * @remarks
   * The number of periods for the incremental data validation task.
   * 
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * The type of the monitoring rule. Valid values:
   * - **delay**: latency alert.
   * - **error**: anomaly alert.
   * - **full_timeout**: alert for the runtime of the full data module.
   * - **warn**: notification alert (the task succeeded but the result did not meet expectations).
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
   * The error code. This parameter will be deprecated.
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
   * The dynamic error message used to replace the **%s** placeholder in the **ErrMessage** response parameter.
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * 403
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
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
   * The monitoring rule information of the DTS task.
   */
  monitorRules?: DescribeJobMonitorRuleResponseBodyMonitorRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CA14388-DD89-4A7B-8CDD-884A10CE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The Kafka topics.
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

