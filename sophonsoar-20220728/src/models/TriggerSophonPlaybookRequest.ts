// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerSophonPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the command that you want to trigger.
   * >You can call the [DescribeSophonCommands](~~DescribeSophonCommands~~) operation to obtain this parameter.
   * 
   * @example
   * waf_process_command
   */
  commandName?: string;
  /**
   * @remarks
   * The input parameters for triggering the command or playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "param1": "xx.xx.xx.xx",
   *     "param2": "7d"
   * }
   */
  inputParams?: string;
  /**
   * @remarks
   * The custom ID of the task. If you do not specify this parameter when triggering a playbook, a random ID is generated. This ID is used for troubleshooting.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * - **command**: Triggers a command task.
   * - **playbook**: Triggers a playbook task.
   * 
   * @example
   * playbook
   */
  triggerType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * >You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandName: 'CommandName',
      inputParams: 'InputParams',
      sophonTaskId: 'SophonTaskId',
      triggerType: 'TriggerType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandName: 'string',
      inputParams: 'string',
      sophonTaskId: 'string',
      triggerType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

