// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteMapAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the routing policy association.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-routemap-assoc-qdoeneegffq4yv****
   */
  associationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client to ensure that it is unique across different requests. The client token only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - **true**: Performs a dry run and does not modify service resources.
   * 
   * - **false** (default): Sends a normal request.
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
   * The list of region IDs where the routing policy is delivered and takes effect for the Express Connect Router (ECR).
   * 
   * > If this parameter is left empty, the routing policy is not delivered to any region.
   */
  regionIdList?: string[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      regionIdList: 'RegionIdList',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      regionIdList: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionIdList)) {
      $dara.Model.validateArray(this.regionIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

