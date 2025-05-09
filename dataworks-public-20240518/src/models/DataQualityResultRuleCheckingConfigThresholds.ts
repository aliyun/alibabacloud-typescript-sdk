// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityResultRuleCheckingConfigThresholdsCritical } from "./DataQualityResultRuleCheckingConfigThresholdsCritical";
import { DataQualityResultRuleCheckingConfigThresholdsExpected } from "./DataQualityResultRuleCheckingConfigThresholdsExpected";
import { DataQualityResultRuleCheckingConfigThresholdsWarned } from "./DataQualityResultRuleCheckingConfigThresholdsWarned";


export class DataQualityResultRuleCheckingConfigThresholds extends $dara.Model {
  critical?: DataQualityResultRuleCheckingConfigThresholdsCritical;
  expected?: DataQualityResultRuleCheckingConfigThresholdsExpected;
  warned?: DataQualityResultRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DataQualityResultRuleCheckingConfigThresholdsCritical,
      expected: DataQualityResultRuleCheckingConfigThresholdsExpected,
      warned: DataQualityResultRuleCheckingConfigThresholdsWarned,
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

