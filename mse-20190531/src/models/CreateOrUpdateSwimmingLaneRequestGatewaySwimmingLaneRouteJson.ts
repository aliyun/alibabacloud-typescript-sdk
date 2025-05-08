// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions } from "./CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions";
import { CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList } from "./CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList";


export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson extends $dara.Model {
  /**
   * @example
   * 0
   */
  canaryModel?: number;
  condition?: string;
  /**
   * @remarks
   * The matching conditions.
   */
  conditions?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions[];
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-84efde2ee1464260bdb17a5b****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 20
   */
  percentage?: number;
  /**
   * @remarks
   * The route IDs.
   */
  routeIdList?: number[];
  routeIndependentPercentageEnable?: boolean;
  routeIndependentPercentageList?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList[];
  static names(): { [key: string]: string } {
    return {
      canaryModel: 'CanaryModel',
      condition: 'Condition',
      conditions: 'Conditions',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      percentage: 'Percentage',
      routeIdList: 'RouteIdList',
      routeIndependentPercentageEnable: 'RouteIndependentPercentageEnable',
      routeIndependentPercentageList: 'RouteIndependentPercentageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canaryModel: 'number',
      condition: 'string',
      conditions: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      percentage: 'number',
      routeIdList: { 'type': 'array', 'itemType': 'number' },
      routeIndependentPercentageEnable: 'boolean',
      routeIndependentPercentageList: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.routeIdList)) {
      $dara.Model.validateArray(this.routeIdList);
    }
    if(Array.isArray(this.routeIndependentPercentageList)) {
      $dara.Model.validateArray(this.routeIndependentPercentageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

