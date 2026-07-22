// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0 0 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["ai-instance-001"]
   */
  instanceIds?: string[];
  /**
   * @example
   * 1
   */
  maxExecutions?: number;
  /**
   * @example
   * {"maxSteps":10,"timeoutSeconds":3600}
   */
  runConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自动回复钉钉消息
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 打开钉钉，回复前5个未读消息
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      instanceIds: 'InstanceIds',
      maxExecutions: 'MaxExecutions',
      runConfigShrink: 'RunConfig',
      taskName: 'TaskName',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxExecutions: 'number',
      runConfigShrink: 'string',
      taskName: 'string',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

