// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical } from "./UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical";
import { UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected } from "./UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected";
import { UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned } from "./UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned";


export class UpdateDataQualityRuleRequestCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
   */
  warned?: UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical,
      expected: UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected,
      warned: UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned,
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

