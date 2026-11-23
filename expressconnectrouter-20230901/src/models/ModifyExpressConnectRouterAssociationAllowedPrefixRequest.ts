// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectRouterAssociationAllowedPrefixRequest extends $dara.Model {
  /**
   * @remarks
   * The list of allowed route prefixes.
   */
  allowedPrefixes?: string[];
  /**
   * @remarks
   * The prefix routing pattern. Valid values:
   * 
   * - MatchMode: Publishes only the configured route prefixes to your data center. Existing specific routes are withdrawn.
   * - IncrementalMode: Publishes the configured route prefixes to your data center. Withdraw previously published more specific routes that are covered by the configured prefixes. More specific routes that are not covered by the configured prefixes remain published.
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
   * A client token used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to make sure that the value is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run.
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of ECR.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  ownerAccount?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      allowedPrefixesMode: 'AllowedPrefixesMode',
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      ownerAccount: 'OwnerAccount',
      version: 'Version',
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
      version: 'string',
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

