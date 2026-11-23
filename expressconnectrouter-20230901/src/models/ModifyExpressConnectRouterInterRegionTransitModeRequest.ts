// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectRouterInterRegionTransitModeRequestTransitModeList extends $dara.Model {
  /**
   * @remarks
   * The inter-region forwarding mode of the ECR. Valid values:
   * 
   * - **ECMP**: The load balancing mode.
   * 
   * - **NearBy**: The nearby forwarding mode.
   * 
   * @example
   * ECMP
   */
  mode?: string;
  /**
   * @remarks
   * The region where the ECR instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterInterRegionTransitModeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client for this parameter. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** as the **ClientToken**. The **RequestId** is different for each request.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request without modifying the service resource.
   * 
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the Express Connect Router (ECR) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The list of inter-region forwarding modes.
   */
  transitModeList?: ModifyExpressConnectRouterInterRegionTransitModeRequestTransitModeList[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      transitModeList: 'TransitModeList',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      transitModeList: { 'type': 'array', 'itemType': ModifyExpressConnectRouterInterRegionTransitModeRequestTransitModeList },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transitModeList)) {
      $dara.Model.validateArray(this.transitModeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

