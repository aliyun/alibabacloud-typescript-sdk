// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachScriptPageResponseBodyListWeights extends $dara.Model {
  /**
   * @example
   * 50
   */
  assessmentPoint?: number;
  assessmentPointEnabled?: boolean;
  /**
   * @example
   * 30
   */
  expressiveness?: number;
  expressivenessEnabled?: boolean;
  pointDeductionRule?: number;
  pointDeductionRuleEnabled?: boolean;
  similarPronunciationScoringEnabled?: boolean;
  /**
   * @example
   * 20
   */
  standard?: number;
  /**
   * @example
   * true
   */
  standardEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
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

