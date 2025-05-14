// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpgradeStatusResponseBodyUpgradeTask extends $dara.Model {
  /**
   * @remarks
   * The description of the update task.
   * 
   * @example
   * subject to actual return
   */
  message?: string;
  /**
   * @remarks
   * The status of the update task. Valid values:
   * 
   * *   `running`: The update task is being executed.
   * *   `Success`: The update task is successfully executed.
   * *   `Failed`: The update task failed.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

