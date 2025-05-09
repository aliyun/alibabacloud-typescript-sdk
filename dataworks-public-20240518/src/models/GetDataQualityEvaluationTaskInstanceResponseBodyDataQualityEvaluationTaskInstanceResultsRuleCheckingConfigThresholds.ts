// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical";
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected";
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned";


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholds extends $dara.Model {
  critical?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical;
  expected?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected;
  warned?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsCritical,
      expected: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsExpected,
      warned: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceResultsRuleCheckingConfigThresholdsWarned,
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

