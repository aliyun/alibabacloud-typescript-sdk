// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcPeerConnectionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You must specify at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You must specify at least one tag value and can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class CreateVpcPeerConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the accepter VPC belongs.
   * 
   * *   To create a VPC peering connection within your Alibaba Cloud account, enter the ID of your Alibaba Cloud account.
   * *   To create a VPC peering connection between your Alibaba Cloud account and another Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
   * 
   * >  If the accepter is a RAM user, set **AcceptingAliUid** to the ID of the Alibaba Cloud account that created the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  acceptingAliUid?: number;
  /**
   * @remarks
   * The region ID of the accepter VPC of the VPC peering connection that you want to create.
   * 
   * *   To create an intra-region VPC peering connection, enter a region ID that is the same as that of the requester VPC.
   * *   To create an inter-region VPC peering connection, enter a region ID that is different from that of the requester VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  acceptingRegionId?: string;
  /**
   * @remarks
   * The ID of the accepter VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1vzjkp2q1xgnind****
   */
  acceptingVpcId?: string;
  /**
   * @remarks
   * The bandwidth of the VPC peering connection. Unit: Mbit/s. The value must be an integer greater than 0. Before you specify this parameter, make sure that you create an inter-region VPC peering connection.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VPC peering connection.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The link type of the VPC peering connection that you want to create. Valid values:
   * 
   * - Platinum.
   * 
   * - Gold: default value.
   * 
   * > 
   * > - If you need to specify this parameter, ensure that the VPC peering connection is an inter-region connection.
   * 
   * @example
   * Gold
   */
  linkType?: string;
  /**
   * @remarks
   * The name of the VPC peering connection.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where you want to create a VPC peering connection.
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
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateVpcPeerConnectionRequestTag[];
  /**
   * @remarks
   * The ID of the requester VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1gsk7h12ew7oegk****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptingAliUid: 'AcceptingAliUid',
      acceptingRegionId: 'AcceptingRegionId',
      acceptingVpcId: 'AcceptingVpcId',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      linkType: 'LinkType',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptingAliUid: 'number',
      acceptingRegionId: 'string',
      acceptingVpcId: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      linkType: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVpcPeerConnectionRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

