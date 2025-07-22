// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectRouterAssociationAllowedPrefixRequest extends $dara.Model {
  /**
   * @remarks
   * The allowed route prefixes.
   */
  allowedPrefixes?: string[];
  /**
   * @remarks
   * The route prefix mode.
   * 
   * *   MatchMode: After you distribute new route CIDR blocks to data centers, original specific routes that are distributed are withdrawn.
   * *   IncrementalMode: After you distribute new route CIDR blocks to data centers, the original specific routes that fall in the CIDR blocks that you configure are withdrawn, and the original specific routes that do not fall in the CIDR blocks are still distributed.
   * 
   * @example
   * MatchMode
   */
  allowedPrefixesMode?: string;
  /**
   * @remarks
   * The ID of the association between the ECR and the VPC or TR.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
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
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      allowedPrefixesMode: 'AllowedPrefixesMode',
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefixes: { 'type': 'array', 'itemType': 'string' },
      allowedPrefixesMode: 'string',
      associationId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      ownerAccount: 'string',
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

