// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions } from "./DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions";
import { DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes } from "./DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes";


export class DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule extends $dara.Model {
  /**
   * @example
   * AND
   */
  conditionJoiner?: string;
  conditions?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions[];
  /**
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  /**
   * @example
   * 100
   */
  percentage?: number;
  percentageByRoute?: { [key: string]: number };
  routeIds?: number[];
  routes?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes[];
  static names(): { [key: string]: string } {
    return {
      conditionJoiner: 'ConditionJoiner',
      conditions: 'Conditions',
      independentPercentageEnable: 'IndependentPercentageEnable',
      percentage: 'Percentage',
      percentageByRoute: 'PercentageByRoute',
      routeIds: 'RouteIds',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionJoiner: 'string',
      conditions: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleConditions },
      independentPercentageEnable: 'boolean',
      percentage: 'number',
      percentageByRoute: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      routeIds: { 'type': 'array', 'itemType': 'number' },
      routes: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRuleRoutes },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.percentageByRoute) {
      $dara.Model.validateMap(this.percentageByRoute);
    }
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

