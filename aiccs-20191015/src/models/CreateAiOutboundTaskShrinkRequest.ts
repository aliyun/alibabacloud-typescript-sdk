// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiOutboundTaskShrinkRequest extends $dara.Model {
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
   * 1.5
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc_xp_pre-cn-***
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
  outboundNumsShrink?: string;
  recallRuleShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   * 
   * **if can be null:**
   * false
   */
  type?: number;
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
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
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
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

