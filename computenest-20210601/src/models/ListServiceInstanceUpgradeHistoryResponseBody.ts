// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory } from "./ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory";


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

