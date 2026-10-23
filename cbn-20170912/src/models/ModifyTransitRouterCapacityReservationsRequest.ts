// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterCapacityReservationsRequestDeploymentSets extends $dara.Model {
  /**
   * @example
   * ds-badxcs*****
   */
  deploymentSetID?: string;
  /**
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
  dataProcessGbps?: ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacitiesDataProcessGbps;
  /**
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
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  deploymentSets?: ModifyTransitRouterCapacityReservationsRequestDeploymentSets[];
  minimumTransitRouterCapacities?: ModifyTransitRouterCapacityReservationsRequestMinimumTransitRouterCapacities[];
  resetCapacityReservations?: ModifyTransitRouterCapacityReservationsRequestResetCapacityReservations[];
  /**
   * @remarks
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

