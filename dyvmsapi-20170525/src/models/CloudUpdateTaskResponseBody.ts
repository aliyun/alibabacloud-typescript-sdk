// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudUpdateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 30
   */
  agentTimeout?: string;
  /**
   * @example
   * 55
   */
  answerRate?: string;
  /**
   * @example
   * 0
   */
  autoComplete?: number;
  /**
   * @example
   * 0
   */
  autoStart?: string;
  /**
   * @example
   * 2026-02-11
   */
  autoStartDay?: string;
  /**
   * @example
   * 08:00:00
   */
  autoStartTime?: string;
  /**
   * @example
   * 0
   */
  autoStop?: string;
  /**
   * @example
   * 2026-02-11
   */
  autoStopDay?: string;
  /**
   * @example
   * 17:00:00
   */
  autoStopTime?: string;
  /**
   * @example
   * 1111
   */
  cnos?: string;
  /**
   * @example
   * 10
   */
  concurrency?: string;
  /**
   * @example
   * 2026-02-10 14:00:00
   */
  createTime?: string;
  /**
   * @example
   * 42366453,74565327
   */
  customerClids?: string;
  /**
   * @example
   * 示例值示例值
   */
  customerMoh?: string;
  /**
   * @example
   * 5
   */
  customerTimeout?: string;
  /**
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @example
   * 8001654
   */
  enterpriseId?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * 0
   */
  isRandom?: string;
  /**
   * @example
   * 133
   */
  ivrId?: string;
  /**
   * @example
   * 10
   */
  maxWaitTime?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  name?: string;
  /**
   * @example
   * 2026-01-0114:00:00
   */
  overTime?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  predictAdjust?: string;
  /**
   * @example
   * 0.33
   */
  quotiety?: string;
  /**
   * @example
   * 2026-02-10 15:00:00
   */
  startTime?: string;
  /**
   * @example
   * 3
   */
  status?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  /**
   * @example
   * [{"key1":"value1"},{"key2":"value2"}]
   */
  userFields?: string;
  /**
   * @example
   * 5
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

export class CloudUpdateTaskResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudUpdateTaskResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
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
      data: CloudUpdateTaskResponseBodyData,
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

