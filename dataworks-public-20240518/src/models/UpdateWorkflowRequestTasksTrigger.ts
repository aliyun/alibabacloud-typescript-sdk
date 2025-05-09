// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequestTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The running mode of the task after it is triggered. This parameter takes effect only if the Type parameter is set to Scheduler. Valid values:
   * 
   * *   Pause
   * *   Skip
   * *   Normal
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      recurrence: 'Recurrence',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrence: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

