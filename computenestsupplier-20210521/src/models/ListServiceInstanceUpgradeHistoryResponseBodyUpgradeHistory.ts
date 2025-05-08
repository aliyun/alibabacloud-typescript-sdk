// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory extends $dara.Model {
  /**
   * @remarks
   * End time of the upgrade.
   * 
   * @example
   * 2022-04-26T09:09:51Z
   */
  endTime?: string;
  /**
   * @remarks
   * Version before the upgrade.
   * 
   * @example
   * 1
   */
  fromVersion?: string;
  /**
   * @remarks
   * Upgrade result.
   * 
   * @example
   * {\\"PreUpgradeExecutionId\\":\\"exec-123\\"}
   */
  results?: string;
  /**
   * @remarks
   * Start time of the upgrade.
   * 
   * @example
   * 2022-04-26T08:09:51Z
   */
  startTime?: string;
  /**
   * @remarks
   * Upgrade status. Possible values:
   * 
   * - upgrading: In progress.
   * 
   * - UpgradeSuccessful: Upgrade successful.
   * 
   * - UpgradeFailed: Upgrade failed.
   * 
   * @example
   * UpgradeFailed
   */
  status?: string;
  /**
   * @remarks
   * Version after the upgrade.
   * 
   * @example
   * 3
   */
  toVersion?: string;
  /**
   * @remarks
   * Upgrade type.
   * - Upgrade
   * - Rollback
   * 
   * @example
   * Upgrade
   */
  type?: string;
  /**
   * @remarks
   * Upgrade history ID.
   * 
   * @example
   * uh-1b21d65f75e94fa09745
   */
  upgradeHistoryId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fromVersion: 'FromVersion',
      results: 'Results',
      startTime: 'StartTime',
      status: 'Status',
      toVersion: 'ToVersion',
      type: 'Type',
      upgradeHistoryId: 'UpgradeHistoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fromVersion: 'string',
      results: 'string',
      startTime: 'string',
      status: 'string',
      toVersion: 'string',
      type: 'string',
      upgradeHistoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

