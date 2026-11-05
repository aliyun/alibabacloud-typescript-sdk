// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application group IDs. You can specify one or more application group IDs to query their information. You can query up to 10 application groups at a time.
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * The list of application group names. You can specify one or more application group names to query their information. You can query up to 10 application groups at a time.
   */
  dpiGroupNames?: string[];
  /**
   * @remarks
   * The number of application groups to return on each page in a paged query. This parameter is used for paging. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 3
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * FFPSpX59Eb****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the regions supported by Smart Access Gateway and their corresponding region IDs.
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

