// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyWeights extends $dara.Model {
  /**
   * @example
   * 10
   */
  abilityEvaluation?: number;
  /**
   * @example
   * false
   */
  abilityEvaluationEnabled?: boolean;
  /**
   * @example
   * 10
   */
  assessmentPoint?: number;
  assessmentPointEnabled?: boolean;
  /**
   * @example
   * 10
   */
  expressiveness?: number;
  /**
   * @example
   * true
   */
  expressivenessEnabled?: boolean;
  /**
   * @example
   * 10
   */
  pointDeductionRule?: number;
  /**
   * @example
   * true
   */
  pointDeductionRuleEnabled?: boolean;
  similarPronunciationScoringEnabled?: boolean;
  /**
   * @example
   * 10
   */
  standard?: number;
  /**
   * @example
   * true
   */
  standardEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      abilityEvaluation: 'abilityEvaluation',
      abilityEvaluationEnabled: 'abilityEvaluationEnabled',
      assessmentPoint: 'assessmentPoint',
      assessmentPointEnabled: 'assessmentPointEnabled',
      expressiveness: 'expressiveness',
      expressivenessEnabled: 'expressivenessEnabled',
      pointDeductionRule: 'pointDeductionRule',
      pointDeductionRuleEnabled: 'pointDeductionRuleEnabled',
      similarPronunciationScoringEnabled: 'similarPronunciationScoringEnabled',
      standard: 'standard',
      standardEnabled: 'standardEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityEvaluation: 'number',
      abilityEvaluationEnabled: 'boolean',
      assessmentPoint: 'number',
      assessmentPointEnabled: 'boolean',
      expressiveness: 'number',
      expressivenessEnabled: 'boolean',
      pointDeductionRule: 'number',
      pointDeductionRuleEnabled: 'boolean',
      similarPronunciationScoringEnabled: 'boolean',
      standard: 'number',
      standardEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

