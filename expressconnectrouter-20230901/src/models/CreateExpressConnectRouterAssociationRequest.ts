// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectRouterAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The allowed route prefixes.
   */
  allowedPrefixes?: string[];
  /**
   * @remarks
   * The route prefix mode. Valid values:
   * 
   * - **MatchMode**: After you distribute new route CIDR blocks to data centers, original specific routes that are distributed are withdrawn.
   * 
   * - **IncrementalMode**: After you distribute new route CIDR blocks to data centers, the original specific routes that fall in the CIDR blocks that you configure are withdrawn, and the original specific routes that do not fall in the CIDR blocks are still distributed.
   * 
   * @example
   * MatchMode
   */
  allowedPrefixesMode?: string;
  /**
   * @remarks
   * The region ID of the resource to be associated.
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
   * 
   * @example
   * cen-of3o1the3i4gwb****
   */
  cenId?: string;
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
   * Specifies whether to initiate an association on the TR when the ECR is associated with the TR. Valid values:
   * 
   * *   **true**: You do not need to initiate an association on the TR.
   * *   **false**: You need to initiate an association on the TR.
   * 
   * @example
   * true
   */
  createAttachment?: boolean;
  /**
   * @remarks
   * The information about the associated resource. It must be 0 to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
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
   * The TR ID.
   * 
   * @example
   * tr-2ze4i71c6be454e2l****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the TR. Default value: ID of the Alibaba Cloud account that logs in.
   * 
   * >  If you want to connect to a network instance that belongs to a different account, this parameter is required.
   * 
   * @example
   * 189159362009****
   */
  transitRouterOwnerId?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1h37fchc6jmfyln****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VPC. Default value: ID of the Alibaba Cloud account that logs in.
   * 
   * >  If you want to connect to a network instance that belongs to a different account, this parameter is required.
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
      transitRouterId: 'TransitRouterId',
      transitRouterOwnerId: 'TransitRouterOwnerId',
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
      transitRouterId: 'string',
      transitRouterOwnerId: 'number',
      vpcId: 'string',
      vpcOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedPrefixes)) {
      $dara.Model.validateArray(this.allowedPrefixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

