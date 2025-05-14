// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAiOutboundTaskDetailResponseBodyDataRecallRule } from "./GetAiOutboundTaskDetailResponseBodyDataRecallRule";


export class GetAiOutboundTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @example
   * 热线技能组
   */
  handlerName?: string;
  /**
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @example
   * 0
   */
  numRepeated?: number;
  outboundNums?: string[];
  recallRule?: GetAiOutboundTaskDetailResponseBodyDataRecallRule;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 未开始
   */
  statusDesc?: string;
  /**
   * @example
   * 123
   */
  taskId?: number;
  /**
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

