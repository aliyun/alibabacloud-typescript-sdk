// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds";


export class CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The method that is used to query the referenced samples. To obtain specific types of thresholds, you must query reference values. In this example, an expression is used to specify the query method of referenced samples.
   * 
   * @example
   * {"bizdate": ["-1"]}
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. Valid values:
   * 
   * *   Fixed
   * *   Fluctation
   * *   FluctationDiscreate
   * *   Auto
   * *   Average
   * 
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
      thresholds: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfigThresholds,
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

