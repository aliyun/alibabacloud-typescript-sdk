// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityRuleRequestCheckingConfigThresholdsCritical } from "./CreateDataQualityRuleRequestCheckingConfigThresholdsCritical";
import { CreateDataQualityRuleRequestCheckingConfigThresholdsExpected } from "./CreateDataQualityRuleRequestCheckingConfigThresholdsExpected";
import { CreateDataQualityRuleRequestCheckingConfigThresholdsWarned } from "./CreateDataQualityRuleRequestCheckingConfigThresholdsWarned";


export class CreateDataQualityRuleRequestCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: CreateDataQualityRuleRequestCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: CreateDataQualityRuleRequestCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
   */
  warned?: CreateDataQualityRuleRequestCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateDataQualityRuleRequestCheckingConfigThresholdsCritical,
      expected: CreateDataQualityRuleRequestCheckingConfigThresholdsExpected,
      warned: CreateDataQualityRuleRequestCheckingConfigThresholdsWarned,
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

