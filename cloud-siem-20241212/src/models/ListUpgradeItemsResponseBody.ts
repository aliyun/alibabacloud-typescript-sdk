// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUpgradeItemsResponseBodyUpgradeItems extends $dara.Model {
  /**
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
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @example
   * 57
   */
  totalCount?: number;
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

