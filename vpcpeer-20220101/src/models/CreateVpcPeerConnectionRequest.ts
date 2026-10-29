// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcPeerConnectionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least one tag key and can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You must specify at least one tag value and can specify up to 20 tag values. The tag value can be an empty string.
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
   * The ID of the Alibaba Cloud account to which the acceptor of the VPC peering connection belongs.
   * 
   * - If you enter your own Alibaba Cloud account ID, a same-account VPC peering connection is created.
   * 
   * - If you enter the ID of another Alibaba Cloud account, a cross-account VPC peering connection is created.
   *    
   * > If the acceptor account is a Resource Access Management (RAM) user, you must enter the ID of the Alibaba Cloud account to which the RAM user belongs in **AcceptingAliUid**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  acceptingAliUid?: number;
  /**
   * @remarks
   * The ID of the region where the acceptor of the VPC peering connection is deployed.
   * 
   * - To create an intra-region VPC peering connection, enter the same region ID as the initiator.
   * 
   * - To create an inter-region VPC peering connection, enter a region ID different from that of the initiator.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  acceptingRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC that acts as the acceptor of the VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1vzjkp2q1xgnind****
   */
  acceptingVpcId?: string;
  /**
   * @remarks
   * The bandwidth of the VPC peering connection. Unit: Mbit/s. The value must be a positive integer.
   * > If you want to specify this parameter, make sure that you are creating an inter-region peering connection.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VPC peering connection. The description must be 2 to 256 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values:
   * 
   * - **true**: performs a dry run and does not create a VPC peering connection. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a Normal request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the jumbo frame feature for the VPC peering connection. Valid values:
   * - true: enabled.
   * - false: disabled.
   * > Note: If you want to specify this parameter, make sure that you are creating an inter-region peering connection.
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The link type.
   * 
   * Valid values: Platinum and Gold. Default value: Gold.
   * 
   * > If you want to specify this parameter, make sure that you are creating an inter-region peering connection.
   * 
   * @example
   * Gold
   */
  linkType?: string;
  /**
   * @remarks
   * The name of the VPC peering connection. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where you want to create a VPC peering connection. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag information.
   */
  tag?: CreateVpcPeerConnectionRequestTag[];
  /**
   * @remarks
   * The ID create a VPC that acts as the initiator create a VPC peering connection.
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
      enableJumboFrame: 'EnableJumboFrame',
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
      enableJumboFrame: 'boolean',
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

