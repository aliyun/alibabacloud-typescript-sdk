// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGrantedToExpressConnectRouterRequestTagModels extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
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
   * The type of the user account. Valid values:
   * 
   * *   **sub**: a Resource Access Management (RAM) user.
   * *   **parent**: an Alibaba Cloud account.
   * 
   * @example
   * OTHER
   */
  callerType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ECR ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the network instance.
   * 
   * @example
   * 129845258050****
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VBR**
   * *   **VPC**
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of entries to read. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 6
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * gAAAAABkyGzFbZR2NnxnyVk0EiL7F3qMBtBim8Es0mugRT3qb8yEHAMaHGanzuaHUmiEq9QRmok0RgxJAINBOJZa5KPjopEu_Q==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the network instance belongs.
   * 
   * @example
   * rg-aek2tsvbnfe****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
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

