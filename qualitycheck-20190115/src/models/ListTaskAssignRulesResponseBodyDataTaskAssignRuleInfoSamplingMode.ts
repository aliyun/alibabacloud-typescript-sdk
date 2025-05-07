// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents";


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode extends $dara.Model {
  /**
   * @example
   * 60
   */
  anyNumberOfDraws?: number;
  /**
   * @example
   * true
   */
  designated?: boolean;
  /**
   * @example
   * 0
   */
  dimension?: number;
  /**
   * @example
   * 30
   */
  limit?: number;
  /**
   * @example
   * 20
   */
  numberOfDraws?: number;
  /**
   * @example
   * 0.1
   */
  proportion?: number;
  /**
   * @example
   * 5
   */
  randomInspectionNumber?: number;
  samplingModeAgents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents;
  static names(): { [key: string]: string } {
    return {
      anyNumberOfDraws: 'AnyNumberOfDraws',
      designated: 'Designated',
      dimension: 'Dimension',
      limit: 'Limit',
      numberOfDraws: 'NumberOfDraws',
      proportion: 'Proportion',
      randomInspectionNumber: 'RandomInspectionNumber',
      samplingModeAgents: 'SamplingModeAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyNumberOfDraws: 'number',
      designated: 'boolean',
      dimension: 'number',
      limit: 'number',
      numberOfDraws: 'number',
      proportion: 'number',
      randomInspectionNumber: 'number',
      samplingModeAgents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents,
    };
  }

  validate() {
    if(this.samplingModeAgents && typeof (this.samplingModeAgents as any).validate === 'function') {
      (this.samplingModeAgents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

