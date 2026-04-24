// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  agentTimeout?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  answerRate?: string;
  /**
   * @example
   * 1
   */
  autoComplete?: number;
  /**
   * @example
   * 1
   */
  autoStart?: string;
  /**
   * @example
   * 2016-04-11
   */
  autoStartDay?: string;
  /**
   * @example
   * 08:00:00
   */
  autoStartTime?: string;
  /**
   * @example
   * 1
   */
  autoStop?: string;
  /**
   * @example
   * 示例值示例值
   */
  autoStopDay?: string;
  /**
   * @example
   * 17:00:00
   */
  autoStopTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  cnos?: string;
  /**
   * @example
   * 示例值示例值
   */
  concurrency?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  createTime?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  customerClids?: string;
  /**
   * @example
   * 示例值示例值
   */
  customerMoh?: string;
  /**
   * @example
   * 示例值示例值
   */
  customerTimeout?: string;
  /**
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @example
   * 示例值示例值
   */
  enterpriseId?: string;
  /**
   * @example
   * 11
   */
  id?: string;
  /**
   * @example
   * 0
   */
  isRandom?: string;
  /**
   * @example
   * 330
   */
  ivrId?: string;
  /**
   * @example
   * 10
   */
  maxWaitTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  name?: string;
  /**
   * @example
   * 示例值示例值
   */
  overTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  predictAdjust?: string;
  /**
   * @example
   * 0.33
   */
  quotiety?: string;
  /**
   * @example
   * 示例值
   */
  startTime?: string;
  /**
   * @example
   * 3
   */
  status?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  /**
   * @example
   * [{"key1":"value1"},{"key2":"value2"}]
   */
  userFields?: string;
  /**
   * @example
   * 10
   */
  wrapup?: string;
  static names(): { [key: string]: string } {
    return {
      agentTimeout: 'AgentTimeout',
      answerRate: 'AnswerRate',
      autoComplete: 'AutoComplete',
      autoStart: 'AutoStart',
      autoStartDay: 'AutoStartDay',
      autoStartTime: 'AutoStartTime',
      autoStop: 'AutoStop',
      autoStopDay: 'AutoStopDay',
      autoStopTime: 'AutoStopTime',
      cnos: 'Cnos',
      concurrency: 'Concurrency',
      createTime: 'CreateTime',
      customerClids: 'CustomerClids',
      customerMoh: 'CustomerMoh',
      customerTimeout: 'CustomerTimeout',
      description: 'Description',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      isRandom: 'IsRandom',
      ivrId: 'IvrId',
      maxWaitTime: 'MaxWaitTime',
      name: 'Name',
      overTime: 'OverTime',
      predictAdjust: 'PredictAdjust',
      quotiety: 'Quotiety',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      userFields: 'UserFields',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentTimeout: 'string',
      answerRate: 'string',
      autoComplete: 'number',
      autoStart: 'string',
      autoStartDay: 'string',
      autoStartTime: 'string',
      autoStop: 'string',
      autoStopDay: 'string',
      autoStopTime: 'string',
      cnos: 'string',
      concurrency: 'string',
      createTime: 'string',
      customerClids: 'string',
      customerMoh: 'string',
      customerTimeout: 'string',
      description: 'string',
      enterpriseId: 'string',
      id: 'string',
      isRandom: 'string',
      ivrId: 'string',
      maxWaitTime: 'string',
      name: 'string',
      overTime: 'string',
      predictAdjust: 'string',
      quotiety: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
      userFields: 'string',
      wrapup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudCreateTaskResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudCreateTaskResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudCreateTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

