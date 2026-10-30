// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterCapacityReservationsShrinkRequest extends $dara.Model {
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
  deploymentSetsShrink?: string;
  /**
   * @remarks
   * The reserved capacity for each zone in the capacity reservation.
   */
  minimumTransitRouterCapacitiesShrink?: string;
  /**
   * @remarks
   * Cancels capacity reservations.
   */
  resetCapacityReservationsShrink?: string;
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

