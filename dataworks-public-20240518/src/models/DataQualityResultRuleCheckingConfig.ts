// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityResultRuleCheckingConfigThresholds } from "./DataQualityResultRuleCheckingConfigThresholds";


export class DataQualityResultRuleCheckingConfig extends $dara.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: DataQualityResultRuleCheckingConfigThresholds;
  /**
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: DataQualityResultRuleCheckingConfigThresholds,
      type: 'string',
    };
  }

  validate() {
    if(this.thresholds && typeof (this.thresholds as any).validate === 'function') {
      (this.thresholds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

