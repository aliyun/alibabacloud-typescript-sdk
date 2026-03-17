// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiGroupsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  dpiGroupIds?: string[];
  /**
   * @example
   * P2P
   */
  dpiGroupNames?: string[];
  /**
   * @remarks
   * The number of entries to return on each page.
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
   * The token used to query the next page.
   * 
   * @example
   * FFPSpX59Eb****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the application groups belong.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) to query the most recent region list.
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

