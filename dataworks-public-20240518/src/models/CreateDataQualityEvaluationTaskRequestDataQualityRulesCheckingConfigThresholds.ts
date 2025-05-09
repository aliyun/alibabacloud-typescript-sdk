// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical";
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected";
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned";


export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
   */
  warned?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical,
      expected: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected,
      warned: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.expected && typeof (this.expected as any).validate === 'function') {
      (this.expected as any).validate();
    }
    if(this.warned && typeof (this.warned as any).validate === 'function') {
      (this.warned as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

