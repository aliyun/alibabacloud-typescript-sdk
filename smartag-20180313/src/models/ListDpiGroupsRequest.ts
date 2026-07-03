// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * You can query information about one or more application groups by specifying their IDs. You can query up to 10 application groups at a time.
   * 
   * @example
   * 1
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * The application group name.
   * 
   * You can query information about one or more application groups by specifying their names. You can query up to 10 application groups at a time.
   * 
   * @example
   * P2P
   */
  dpiGroupNames?: string[];
  /**
   * @remarks
   * The number of application groups to return on each page.
   * 
   * Valid values: **1** to **100**.
   * 
   * Default value: **20**.
   * 
   * @example
   * 3
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * FFPSpX59Eb****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the regions and their IDs that Smart Access Gateway supports.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dpiGroupIds: 'DpiGroupIds',
      dpiGroupNames: 'DpiGroupNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupIds)) {
      $dara.Model.validateArray(this.dpiGroupIds);
    }
    if(Array.isArray(this.dpiGroupNames)) {
      $dara.Model.validateArray(this.dpiGroupNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

