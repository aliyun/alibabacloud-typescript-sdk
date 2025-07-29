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

export class GetUpgradeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned during the update.
   * 
   * @example
   * subject to actual return
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the precheck report.
   * 
   * @example
   * be4c8eb72de94d459ea7ace7c811d119
   */
  precheckReportId?: string;
  /**
   * @remarks
   * The status of the update. Valid values:
   * 
   * *   `success`: The update is successful.
   * *   `fail`: The update failed.
   * *   `pause`: The update is paused.
   * *   `running`: The update is in progress.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The current phase of the update. Valid values:
   * 
   * *   `not_start`: The update is not started.
   * *   `prechecking`: The precheck is in progress.
   * *   `upgrading`: The cluster is being updated.
   * *   `pause`: The update is paused.
   * *   `success`: The update is successful.
   * 
   * @example
   * prechecking
   */
  upgradeStep?: string;
  /**
   * @remarks
   * The details of the update task.
   */
  upgradeTask?: GetUpgradeStatusResponseBodyUpgradeTask;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'error_message',
      precheckReportId: 'precheck_report_id',
      status: 'status',
      upgradeStep: 'upgrade_step',
      upgradeTask: 'upgrade_task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      precheckReportId: 'string',
      status: 'string',
      upgradeStep: 'string',
      upgradeTask: GetUpgradeStatusResponseBodyUpgradeTask,
    };
  }

  validate() {
    if(this.upgradeTask && typeof (this.upgradeTask as any).validate === 'function') {
      (this.upgradeTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

