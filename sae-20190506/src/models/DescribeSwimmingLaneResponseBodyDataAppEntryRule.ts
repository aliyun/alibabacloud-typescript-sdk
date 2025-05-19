// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions } from "./DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions";


export class DescribeSwimmingLaneResponseBodyDataAppEntryRule extends $dara.Model {
  /**
   * @example
   * AND
   */
  conditionJoiner?: string;
  conditions?: DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions[];
  /**
   * @example
   * true
   */
  independentPercentageEnable?: boolean;
  paths?: string[];
  /**
   * @example
   * 50
   */
  percentage?: number;
  percentageByPath?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      conditionJoiner: 'ConditionJoiner',
      conditions: 'Conditions',
      independentPercentageEnable: 'IndependentPercentageEnable',
      paths: 'Paths',
      percentage: 'Percentage',
      percentageByPath: 'PercentageByPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionJoiner: 'string',
      conditions: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataAppEntryRuleConditions },
      independentPercentageEnable: 'boolean',
      paths: { 'type': 'array', 'itemType': 'string' },
      percentage: 'number',
      percentageByPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(this.percentageByPath) {
      $dara.Model.validateMap(this.percentageByPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

