// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the association between the ECR and the VPC or TR.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * *   **VPC**
   * *   **TR**
   * 
   * @example
   * VPC
   */
  associationNodeType?: string;
  /**
   * @remarks
   * The region ID of the VPC or TR.
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
   * The maximum number of entries to read. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 10
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
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
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
   * The VPC ID.
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
      transitRouterId: 'TransitRouterId',
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
      transitRouterId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

