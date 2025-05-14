// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAiOutboundTaskRequestRecallRule } from "./UpdateAiOutboundTaskRequestRecallRule";


export class UpdateAiOutboundTaskRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  handlerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundNums?: string[];
  recallRule?: UpdateAiOutboundTaskRequestRecallRule;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: UpdateAiOutboundTaskRequestRecallRule,
      taskId: 'number',
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

