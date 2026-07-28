// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcGatewayEndpointRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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

export class CreateVpcGatewayEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without creating the gateway endpoint. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned. The check items include whether the AccessKey pair is valid, whether the Resource Access Management (RAM) user has the required authorization, and whether the required parameters are specified.
   * 
   * - **false** (default): sends a Normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the gateway endpoint is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the gateway endpoint.
   * 
   * The description must be 1 to 255 characters in length.
   * 
   * @example
   * test
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The name of the gateway endpoint.
   * 
   * The name must be 1 to 128 characters in length.
   * 
   * @example
   * test
   */
  endpointName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The access policy for the cloud service.
   * 
   * For more information about the syntax and structure of access policies, see [Policy structure and syntax](https://help.aliyun.com/document_detail/93739.html).
   * 
   * > 
   * > - This parameter is required if the selected endpoint service supports access policies.
   * > - This parameter must be empty if the selected endpoint service does not support access policies.
   * > - You can call the [ListVpcEndpointServicesByEndUser](https://help.aliyun.com/document_detail/448920.html) operation to check whether an endpoint service supports access policies. A value of true for SupportPolicy indicates that access policies are supported.
   * 
   * @example
   * {   "Version" : "1",   "Statement" : [ {     "Effect" : "Allow",     "Resource" : [ "*" ],     "Action" : [ "*" ],     "Principal" : [ "*" ]   } ] }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The region ID of the gateway endpoint that you want to create.
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
   * The ID of the resource group to which the gateway endpoint belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service name of the endpoint service.
   * 
   * This parameter is required.
   * 
   * @example
   * com.aliyun.cn-hangzhou.oss
   */
  serviceName?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateVpcGatewayEndpointRequestTag[];
  /**
   * @remarks
   * The ID of the VPC for which you want to create the gateway endpoint.
   * 
   * The VPC must be in the same region as the gateway endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1gsk7h12ew7oegk****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointName: 'EndpointName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceName: 'ServiceName',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyDocument: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceName: 'string',
      tag: { 'type': 'array', 'itemType': CreateVpcGatewayEndpointRequestTag },
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

