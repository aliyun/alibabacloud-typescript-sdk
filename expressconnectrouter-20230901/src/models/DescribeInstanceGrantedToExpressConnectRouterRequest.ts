// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGrantedToExpressConnectRouterRequestTagModels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot specify an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you cannot specify an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceGrantedToExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the caller. Valid values:
   * 
   * - ECR
   * - OTHER
   * 
   * Default value: ECR.
   * 
   * @example
   * ECR
   */
  callerType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The request is checked but EPS resources are not modified.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the authorized instance.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the authorized network instance belongs.
   * 
   * @example
   * 1298452580502345
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The region where the authorized network instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * - **VBR**: VBR instance.
   * - **VPC**: VPC instance.
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If this is the first query or no next query is available, leave this parameter empty.
   * - If a next query is available, set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * gAAAAABkyGzFbZR2NnxnyVk0EiL7F3qMBtBim8Es0mugRT3qb8yEHAMaHGanzuaHUmiEq9QRmok0RgxJAINBOJZa5KPjopEu_Q==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2tsvbnfe****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagModels?: DescribeInstanceGrantedToExpressConnectRouterRequestTagModels[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      callerType: 'CallerType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tagModels: 'TagModels',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      instanceRegionId: 'string',
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tagModels: { 'type': 'array', 'itemType': DescribeInstanceGrantedToExpressConnectRouterRequestTagModels },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagModels)) {
      $dara.Model.validateArray(this.tagModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

