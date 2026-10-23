// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterCapacityReservationsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  deploymentSetsShrink?: string;
  minimumTransitRouterCapacitiesShrink?: string;
  resetCapacityReservationsShrink?: string;
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
      deploymentSetsShrink: 'DeploymentSets',
      minimumTransitRouterCapacitiesShrink: 'MinimumTransitRouterCapacities',
      resetCapacityReservationsShrink: 'ResetCapacityReservations',
      transitRouterId: 'TransitRouterId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deploymentSetsShrink: 'string',
      minimumTransitRouterCapacitiesShrink: 'string',
      resetCapacityReservationsShrink: 'string',
      transitRouterId: 'string',
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

