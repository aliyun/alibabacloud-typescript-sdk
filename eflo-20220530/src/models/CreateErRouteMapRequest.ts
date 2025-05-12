// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xlhsvdvt
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * The tenant to which the route receiving instance belongs.
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the destination instance. Valid values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * This parameter is required.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Rejected
   * 
   * This parameter is required.
   * 
   * @example
   * permit
   */
  routeMapAction?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * A smaller sequence number indicates a lower priority. When a route is matched, a policy with a higher priority is preferentially matched.
   * 
   * **Valid values: 1001 to 2000**
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xlsjsdvt
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * The tenant to which the route publish instance belongs
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * This parameter is required.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      routeMapAction: 'RouteMapAction',
      routeMapNum: 'RouteMapNum',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      receptionInstanceId: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      routeMapAction: 'string',
      routeMapNum: 'number',
      transmissionInstanceId: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

