// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterCapacityReservationsRequestDeploymentSets extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment set instance used.
   * 
   * @example
   * ds-badxcs*****
   */
  deploymentSetID?: string;
  /**
   * @remarks
   * The zone for which to modify the deployment set of the capacity reservation.
   * 
   * - To cancel the deployment set, specify the zone and leave the deployment set ID empty.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneID?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetID: 'DeploymentSetID',
      zoneID: 'ZoneID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetID: 'string',
      zoneID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacitiesDataProcessGbps extends $dara.Model {
  /**
   * @remarks
   * The target reserved capacity for the specified zone.
   * 
   * @example
   * 100
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacities extends $dara.Model {
  /**
   * @remarks
   * The reserved capacity for the specified zone.
   */
  dataProcessGbps?: ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacitiesDataProcessGbps;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-shanghai-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataProcessGbps: 'DataProcessGbps',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessGbps: ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacitiesDataProcessGbps,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dataProcessGbps && typeof (this.dataProcessGbps as any).validate === 'function') {
      (this.dataProcessGbps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterCapacityReservationsRequestResetCapacityReservations extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone for which to cancel the capacity reservation.
   * 
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterCapacityReservationsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the token on your client to ensure that the token is unique across different requests. The client token only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID of the API request as the client token. The request ID may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment set information for the capacity reservation.
   */
  deploymentSets?: ModifyTransitRouterCapacityReservationsRequestDeploymentSets[];
  /**
   * @remarks
   * The reserved capacity for each zone in the capacity reservation.
   */
  minimumTransitRouterCapacities?: ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacities[];
  /**
   * @remarks
   * Cancels capacity reservations.
   */
  resetCapacityReservations?: ModifyTransitRouterCapacityReservationsRequestResetCapacityReservations[];
  /**
   * @remarks
   * The ID of the transit router instance for forward routing.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deploymentSets: 'DeploymentSets',
      minimumTransitRouterCapacities: 'MinimumTransitRouterCapacities',
      resetCapacityReservations: 'ResetCapacityReservations',
      transitRouterId: 'TransitRouterId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deploymentSets: { 'type': 'array', 'itemType': ModifyTransitRouterCapacityReservationsRequestDeploymentSets },
      minimumTransitRouterCapacities: { 'type': 'array', 'itemType': ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacities },
      resetCapacityReservations: { 'type': 'array', 'itemType': ModifyTransitRouterCapacityReservationsRequestResetCapacityReservations },
      transitRouterId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentSets)) {
      $dara.Model.validateArray(this.deploymentSets);
    }
    if(Array.isArray(this.minimumTransitRouterCapacities)) {
      $dara.Model.validateArray(this.minimumTransitRouterCapacities);
    }
    if(Array.isArray(this.resetCapacityReservations)) {
      $dara.Model.validateArray(this.resetCapacityReservations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

