// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory extends $dara.Model {
  /**
   * @remarks
   * The time when the update ended.
   * 
   * @example
   * 2022-04-26T09:09:51Z
   */
  endTime?: string;
  /**
   * @remarks
   * The version before the upgrade.
   * 
   * @example
   * 1
   */
  fromVersion?: string;
  /**
   * @remarks
   * The upgrade result.
   * 
   * @example
   * {\\"PreUpgradeExecutionId\\":\\"exec-123\\"}
   */
  results?: string;
  /**
   * @remarks
   * The time when the update started.
   * 
   * @example
   * 2022-04-26T08:09:51Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the update. Valid values:
   * 
   * *   upgrading: The service instance is being upgraded.
   * *   UpgradeSuccessful: The service instance is upgraded.
   * *   UpgradeFailed: The service instance failed to be upgraded.
   * 
   * @example
   * UpgradeFailed
   */
  status?: string;
  /**
   * @remarks
   * The version after the upgrade.
   * 
   * @example
   * 3
   */
  toVersion?: string;
  /**
   * @remarks
   * The update type.
   * 
   * @example
   * Upgrade
   */
  type?: string;
  /**
   * @remarks
   * The ID of the upgrade record.
   * 
   * @example
   * exec-123
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

export class ListServiceInstanceUpgradeHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI41
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE3EDF4E-B3B1-19B6-BD01-30D4D00F6E5D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The upgrade history.
   */
  upgradeHistory?: ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      upgradeHistory: 'UpgradeHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      upgradeHistory: { 'type': 'array', 'itemType': ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeHistory)) {
      $dara.Model.validateArray(this.upgradeHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

