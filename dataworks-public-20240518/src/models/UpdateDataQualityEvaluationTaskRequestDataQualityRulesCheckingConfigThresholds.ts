// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical";
import { UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected";
import { UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned";


export class UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
   */
  warned?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsCritical,
      expected: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsExpected,
      warned: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholdsWarned,
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

