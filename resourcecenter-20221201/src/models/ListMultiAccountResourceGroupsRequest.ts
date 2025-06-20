// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1394339739****
   */
  accountId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAS2Nboi3t4xGrdlG5/Ks/Q1xPG9jzviYEuZydevXIkgF
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of resource groups.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

