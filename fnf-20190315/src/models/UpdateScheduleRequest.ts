// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the time-based schedule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testFlowName
   */
  flowName?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule. It must be in the JSON format.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
  /**
   * @remarks
   * The name of the time-based schedule. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      flowName: 'FlowName',
      payload: 'Payload',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      flowName: 'string',
      payload: 'string',
      scheduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

