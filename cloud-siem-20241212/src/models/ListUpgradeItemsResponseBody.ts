// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUpgradeItemsResponseBodyUpgradeItems extends $dara.Model {
  /**
   * @remarks
   * The upgrade item ID.
   * 
   * @example
   * data_storage_2_upgrade
   */
  upgradeItemId?: string;
  static names(): { [key: string]: string } {
    return {
      upgradeItemId: 'UpgradeItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upgradeItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpgradeItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in a single call.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request or if there are no more results to return. If a next page exists, set this parameter to the value of NextToken returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of upgrade items.
   */
  upgradeItems?: ListUpgradeItemsResponseBodyUpgradeItems[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      upgradeItems: 'UpgradeItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      upgradeItems: { 'type': 'array', 'itemType': ListUpgradeItemsResponseBodyUpgradeItems },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeItems)) {
      $dara.Model.validateArray(this.upgradeItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

