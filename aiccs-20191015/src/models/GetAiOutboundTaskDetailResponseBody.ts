// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskDetailResponseBodyDataRecallRule extends $dara.Model {
  /**
   * @remarks
   * The number of recall attempts.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The recall interval. Unit: minutes.
   * 
   * @example
   * 2
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The concurrency for automatic outbound calls.
   * 
   * @example
   * 10
   */
  concurrentRate?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Real estate sales
   */
  description?: string;
  /**
   * @remarks
   * The task execution time. Time periods are configured by day of the week using a JSON object. The start and end values are in the HH:mm format.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @remarks
   * The fixed call rate for predictive outbound calls.
   * 
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * The skill group ID (for predictive outbound calls) or IVR ID (for automatic outbound calls).
   * 
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @remarks
   * The skill group name or IVR name.
   * 
   * @example
   * Hotline skill group
   */
  handlerName?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * xxxxx outbound call
   */
  name?: string;
  /**
   * @remarks
   * The callee number deduplication policy.
   * 
   * - **0**: Deduplicate.
   * - **1**: Do not deduplicate.
   * 
   * @example
   * 0
   */
  numRepeated?: number;
  /**
   * @remarks
   * The outbound caller numbers.
   */
  outboundNums?: string[];
  /**
   * @remarks
   * The failed recall policy.
   */
  recallRule?: GetAiOutboundTaskDetailResponseBodyDataRecallRule;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **0**: Not started.
   * - **1**: In progress.
   * - **2**: System paused.
   * - **3**: Manually paused.
   * - **4**: Completed.
   * - **5**: Stopped.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task status description.
   * 
   * @example
   * Not started
   */
  statusDesc?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123
   */
  taskId?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **2**: Predictive outbound call.
   * - **3**: Automatic outbound call.
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: GetAiOutboundTaskDetailResponseBodyDataRecallRule,
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundNums)) {
      $dara.Model.validateArray(this.outboundNums);
    }
    if(this.recallRule && typeof (this.recallRule as any).validate === 'function') {
      (this.recallRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the outbound call task.
   */
  data?: GetAiOutboundTaskDetailResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAiOutboundTaskDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

