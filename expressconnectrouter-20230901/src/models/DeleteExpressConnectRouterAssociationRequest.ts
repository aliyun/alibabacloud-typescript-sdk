// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExpressConnectRouterAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID used to associate the Express Connect Router (ECR) with a VPC or transit router.
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
   * You can generate a parameter value from your client to ensure that the parameter value is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to delete the association between the Express Connect Router (ECR) and a transit router or VPC. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  deleteAttachment?: boolean;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request. Valid values:
   * 
   * - **true**: Sends a dry run request and does not modify service resources.
   * 
   * - **false** (default value): Sends a normal request.
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
  version?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      deleteAttachment: 'DeleteAttachment',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      deleteAttachment: 'boolean',
      dryRun: 'boolean',
      ecrId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

