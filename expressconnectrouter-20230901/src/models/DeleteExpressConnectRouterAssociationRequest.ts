// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExpressConnectRouterAssociationRequest extends $dara.Model {
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
   * Specifies whether to delete the association between the ECR and the VPC or TR. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  deleteAttachment?: boolean;
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
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      deleteAttachment: 'DeleteAttachment',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      deleteAttachment: 'boolean',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

