// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectRouterAssociationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. The tag value can be an empty string and can be up to 128 characters in length. It cannot contain `http://` or `https://`.
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

export class CreateExpressConnectRouterAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of allowed route prefixes.
   */
  allowedPrefixes?: string[];
  /**
   * @remarks
   * The route prefix mode. Valid values:
   * - MatchMode: match mode. Only the configured route CIDR blocks are advertised to the data center, and the previously advertised specific routes are withdrawn.
   * - IncrementalMode: incremental mode. The configured route CIDR blocks are advertised to the data center. The previously advertised specific routes that fall within the configured route CIDR blocks are withdrawn, and the specific routes that do not fall within the configured CIDR blocks remain advertised.
   * 
   * @example
   * MatchMode
   */
  allowedPrefixesMode?: string;
  /**
   * @remarks
   * The region where the associated resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  associationRegionId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * > If you specify TransitRouterId, CenId is required. You must first call the CreateCen operation of the Cbn (2017-09-12) service to create a CEN instance and obtain the CEN instance ID.
   * 
   * @example
   * cen-of3o1the3i4gwb****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value from your client to ensure that the value is unique among different requests. The client token only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to initiate an association when the Express Connect Router is associated with the transit router. Valid values:
   * 
   * - **true**: No association is initiated on the transit router side.
   * - **false**: An association is initiated on the transit router side.
   * 
   * @example
   * true
   */
  createAttachment?: boolean;
  /**
   * @remarks
   * The description of the associated resource. The description must be 0 to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request. Valid values:
   * 
   * - **true**: The system sends a check request without modifying service resources.
   * 
   * - **false** (default): The system sends a normal request.
   * 
   * @example
   * false
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
   * The list of tags.
   * 
   * You can add up to 20 tags.
   */
  tag?: CreateExpressConnectRouterAssociationRequestTag[];
  /**
   * @remarks
   * The ID of the transit router.
   * > The TransitRouterId and VpcId parameters are mutually exclusive. You must specify one of them. You must first call the CreateTransitRouter operation of the Cbn (2017-09-12) service to create a transit router and obtain the transit router ID.
   * 
   * @example
   * tr-2ze4i71c6be454e2l****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the transit router instance belongs. The transit router is used to forward routing traffic. Default value: the current logon Alibaba Cloud account ID.
   * 
   * > If you want to load a network instance across accounts, this parameter is required.
   * 
   * @example
   * 189159362009****
   */
  transitRouterOwnerId?: number;
  version?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance.
   * > The VpcId and TransitRouterId parameters are mutually exclusive. You must specify one of them.
   * > You must first call the CreateVpc operation of the Vpc (2016-04-28) service to create a VPC and obtain the VPC ID.
   * 
   * @example
   * vpc-bp1h37fchc6jmfyln****
   */
  vpcId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the VPC-connected instance belongs. Default value: the current logon Alibaba Cloud account ID.
   * 
   * > If you want to load a network instance across accounts, this parameter is required.
   * 
   * @example
   * 132193271328****
   */
  vpcOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      allowedPrefixesMode: 'AllowedPrefixesMode',
      associationRegionId: 'AssociationRegionId',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      createAttachment: 'CreateAttachment',
      description: 'Description',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterOwnerId: 'TransitRouterOwnerId',
      version: 'Version',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefixes: { 'type': 'array', 'itemType': 'string' },
      allowedPrefixesMode: 'string',
      associationRegionId: 'string',
      cenId: 'string',
      clientToken: 'string',
      createAttachment: 'boolean',
      description: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      tag: { 'type': 'array', 'itemType': CreateExpressConnectRouterAssociationRequestTag },
      transitRouterId: 'string',
      transitRouterOwnerId: 'number',
      version: 'string',
      vpcId: 'string',
      vpcOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedPrefixes)) {
      $dara.Model.validateArray(this.allowedPrefixes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

