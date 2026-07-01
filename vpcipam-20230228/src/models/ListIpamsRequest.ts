// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the IPAMs. You can specify up to 100 IPAM IDs.
   */
  ipamIds?: string[];
  /**
   * @remarks
   * The name of the IPAM.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamName?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - You do not need to specify this parameter for the first request or when no next page exists.
   * 
   * - If a next page exists, set the value to the NextToken value returned in the last API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the hosted region of the IPAM. You can call [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPAM belongs.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListIpamsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ipamIds: 'IpamIds',
      ipamName: 'IpamName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamIds: { 'type': 'array', 'itemType': 'string' },
      ipamName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipamIds)) {
      $dara.Model.validateArray(this.ipamIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

