// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical } from "./GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical";
import { GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected } from "./GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected";
import { GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned } from "./GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned";


export class GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
   */
  warned?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical,
      expected: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected,
      warned: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned,
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

