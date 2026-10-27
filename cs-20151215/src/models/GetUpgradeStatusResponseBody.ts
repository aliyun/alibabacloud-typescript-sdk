// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpgradeStatusResponseBodyUpgradeTask extends $dara.Model {
  /**
   * @remarks
   * The description of the upgrade task.
   * 
   * @example
   * subject to actual return
   */
  message?: string;
  /**
   * @remarks
   * The status of the upgrade task. Valid values:
   * - `running`: Running.
   * - `Success`: Succeeded.
   * - `Failed`: Failed.
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
   * The error message during the cluster upgrade.
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
   * The current upgrade status of the cluster. Valid values:
   * 
   * - `success`: Upgrade succeeded.
   * - `fail`: Upgrade failed.
   * - `pause`: Upgrade paused.
   * - `running`: Upgrade in progress.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The current upgrade stage of the cluster. Valid values:
   * 
   * - `not_start`: Not started.
   * - `prechecking`: Prechecking.
   * - `upgrading`: Upgrading.
   * - `pause`: Paused.
   * - `success`: Upgrade succeeded.
   * 
   * @example
   * prechecking
   */
  upgradeStep?: string;
  /**
   * @remarks
   * The details of the upgrade task.
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

