// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVpcGatewayEndpointRequestTag } from "./CreateVpcGatewayEndpointRequestTag";


export class CreateVpcGatewayEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > 
   * 
   * If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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
   * For more information about the syntax and structure of the access policy, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {   "Version" : "1",   "Statement" : [ {     "Effect" : "Allow",     "Resource" : [ "*" ],     "Action" : [ "*" ],     "Principal" : [ "*" ]   } ] }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The region ID of the gateway endpoint.
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
   * The name of the endpoint service.
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
   * The ID of the virtual private cloud (VPC) where you want to create the gateway endpoint.
   * 
   * The VPC and gateway endpoint must be deployed in the same region.
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

