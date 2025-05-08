// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory } from "./ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory";


export class ListServiceInstanceUpgradeHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of items to return per page when paginating results. The maximum is 100, and the default is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to use for the next query.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 86CAC31E-3527-562C-869F-347E931C9B25
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of upgrade history
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * List of upgrade histories.
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

