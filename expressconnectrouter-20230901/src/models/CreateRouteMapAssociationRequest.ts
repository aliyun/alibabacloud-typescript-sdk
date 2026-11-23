// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteMapAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client and ensure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether it is a dry run only. Valid values:
   * 
   * - **true**: sends a dry run request without modifying EPS resources.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Express Connect Router (ECR) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The list of region IDs of the Express Connect Router (ECR) where the routing policy is distributed and takes effect.
   * 
   * > If this parameter is left empty, the routing policy is not distributed to any region.
   */
  regionIdList?: string[];
  /**
   * @remarks
   * The ID of the route map in the Cloud Enterprise Network (CEN).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-6m58b17417tg5a****
   */
  routeMapId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      regionIdList: 'RegionIdList',
      routeMapId: 'RouteMapId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      regionIdList: { 'type': 'array', 'itemType': 'string' },
      routeMapId: 'string',
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

