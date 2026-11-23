// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAssociationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. The tag key cannot be an empty string. It can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. The tag value can be an empty string. It can be up to 128 characters in length, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeExpressConnectRouterAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID used to associate the Express Connect Router (ECR) with a VPC or TR.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * - **VPC**: VPC.
   * 
   * - **TR**: transit router.
   * 
   * @example
   * VPC
   */
  associationNodeType?: string;
  /**
   * @remarks
   * The region where the VPC or TR resides.
   * 
   * @example
   * cn-hangzhou
   */
  associationRegionId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-of3o1the3i4gwb****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client. Make sure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether this is a dry run. Valid values:
   * - **true**: sends a check request and does not modify service resources.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * > You can call the CreateExpressConnectRouter API operation to create an ECR instance and obtain the EcrId.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
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
   * The token for the next query. Valid values:
   * - If this is the first query or no next query is required, leave this parameter empty.
   * - If a next query is required, set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * You can add up to 20 tags.
   */
  tag?: DescribeExpressConnectRouterAssociationRequestTag[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-2ze4i71c6be454e2l****
   */
  transitRouterId?: string;
  version?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance.
   * 
   * @example
   * vpc-bp1h37fchc6jmfyln****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      associationNodeType: 'AssociationNodeType',
      associationRegionId: 'AssociationRegionId',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      associationNodeType: 'string',
      associationRegionId: 'string',
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeExpressConnectRouterAssociationRequestTag },
      transitRouterId: 'string',
      version: 'string',
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

