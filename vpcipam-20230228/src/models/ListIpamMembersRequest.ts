// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A list of IDs of members managed by the IPAM trusted service.
   */
  memberIds?: string[];
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - If **NextToken** is empty, no more results are available.
   * 
   * - If **NextToken** has a value, the value is the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the hosted region of the IPAM. Call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to get the region ID.
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
      memberIds: 'MemberIds',
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
      maxResults: 'number',
      memberIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberIds)) {
      $dara.Model.validateArray(this.memberIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

