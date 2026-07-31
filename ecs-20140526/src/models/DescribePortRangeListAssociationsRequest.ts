// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRangeListAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for paging queries.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of `NextToken` that was returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh15YZPnzqF7Vs2EB6Ix327v
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port range list ID.
   * 
   * This parameter is required.
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The region ID of the port range list. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portRangeListId: 'PortRangeListId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portRangeListId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

