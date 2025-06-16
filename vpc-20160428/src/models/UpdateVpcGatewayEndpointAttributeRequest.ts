// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcGatewayEndpointAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks your AccessKey pair, the RAM user permissions, and the required parameters If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new description of the gateway endpoint.
   * 
   * The description must be 1 to 255 characters in length.
   * 
   * @example
   * updateendpoint
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The ID of the gateway endpoint that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * vpce-bp1w1dmdqjpwul0v3****
   */
  endpointId?: string;
  /**
   * @remarks
   * The new name of the gateway endpoint.
   * 
   * The name must be 1 to 128 characters in length.
   * 
   * @example
   * update
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyDocument: 'string',
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

