// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDhcpOptionsSetsRequestTags } from "./ListDhcpOptionsSetsRequestTags";


export class ListDhcpOptionsSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DHCP options set. You can specify at most 20 IDs.
   * 
   * @example
   * dopt-o6w0df4epg9zo8isy****
   */
  dhcpOptionsSetId?: string[];
  /**
   * @remarks
   * The name of the DHCP options set.
   * 
   * The name must be 1 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * Valid values:
   * 
   * *   tf-testAccVpcDhcpOptionsSets-1585169790614573448
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     tf-testAccVpcDhcpOptionsSets-1585169790614573448
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * test
   */
  dhcpOptionsSetName?: string;
  /**
   * @remarks
   * The root domain. For example, you can set the value to example.com.
   * 
   * After a DHCP options set is associated with a virtual private cloud (VPC), the root domain in the DHCP options set is automatically synchronized with the ECS instances in the VPC.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of the **NextToken** parameter.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the DHCP options sets that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the DHCP options set belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListDhcpOptionsSetsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      domainName: 'DomainName',
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
      dhcpOptionsSetId: { 'type': 'array', 'itemType': 'string' },
      dhcpOptionsSetName: 'string',
      domainName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListDhcpOptionsSetsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.dhcpOptionsSetId)) {
      $dara.Model.validateArray(this.dhcpOptionsSetId);
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

