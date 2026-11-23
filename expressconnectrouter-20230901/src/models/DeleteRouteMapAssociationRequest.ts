// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteMapAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the route policy association.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-routemap-assoc-qdoeneegffq4yv****
   */
  associationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether it is only a dry run for this request. Valid values:
   * 
   * - **true**: sends a check request without modifying the EPS resource.
   * 
   * - **false** (default): sends a normal request.
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
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
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

