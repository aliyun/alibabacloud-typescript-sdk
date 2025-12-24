// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerSophonPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the command that you want to trigger.
   * 
   * >  You can call the [DescribeSophonCommands](~~DescribeSophonCommands~~) operation to query the command name.
   * 
   * @example
   * waf_process_command
   */
  commandName?: string;
  /**
   * @remarks
   * The input parameters of the command or playbook that you want to trigger.
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
   * The custom ID. If you do not specify this parameter when the playbook is triggered, a random ID is generated for fault locating and troubleshooting.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **command**
   * *   **playbook**
   * 
   * @example
   * playbook
   */
  triggerType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      commandName: 'CommandName',
      inputParams: 'InputParams',
      sophonTaskId: 'SophonTaskId',
      triggerType: 'TriggerType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

