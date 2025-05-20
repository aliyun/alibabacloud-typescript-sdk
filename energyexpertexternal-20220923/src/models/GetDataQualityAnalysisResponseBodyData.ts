// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityAnalysisResponseBodyDataDataQuality } from "./GetDataQualityAnalysisResponseBodyDataDataQuality";
import { GetDataQualityAnalysisResponseBodyDataDataQualityResult } from "./GetDataQualityAnalysisResponseBodyDataDataQualityResult";
import { GetDataQualityAnalysisResponseBodyDataSensitivityList } from "./GetDataQualityAnalysisResponseBodyDataSensitivityList";
import { GetDataQualityAnalysisResponseBodyDataUncertaintyValues } from "./GetDataQualityAnalysisResponseBodyDataUncertaintyValues";


export class GetDataQualityAnalysisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Score of each inventory.
   */
  dataQuality?: GetDataQualityAnalysisResponseBodyDataDataQuality[];
  /**
   * @remarks
   * Data quality result.
   */
  dataQualityResult?: GetDataQualityAnalysisResponseBodyDataDataQualityResult;
  /**
   * @remarks
   * Sensitivity analysis list
   */
  sensitivityList?: GetDataQualityAnalysisResponseBodyDataSensitivityList[];
  /**
   * @remarks
   * Uncertainty value. The model\\"s overall percentage uncertainty results. "10.00%" symbolizes a 10.00% uncertainty, indicating that the carbon footprint lies within ±10.00%. This is derived from a weighted aggregation of individual inventory uncertainties.
   * 
   * @example
   * 10.00
   */
  uncertainty?: string;
  /**
   * @remarks
   * Uncertainty list
   */
  uncertaintyValues?: GetDataQualityAnalysisResponseBodyDataUncertaintyValues[];
  static names(): { [key: string]: string } {
    return {
      dataQuality: 'dataQuality',
      dataQualityResult: 'dataQualityResult',
      sensitivityList: 'sensitivityList',
      uncertainty: 'uncertainty',
      uncertaintyValues: 'uncertaintyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQuality: { 'type': 'array', 'itemType': GetDataQualityAnalysisResponseBodyDataDataQuality },
      dataQualityResult: GetDataQualityAnalysisResponseBodyDataDataQualityResult,
      sensitivityList: { 'type': 'array', 'itemType': GetDataQualityAnalysisResponseBodyDataSensitivityList },
      uncertainty: 'string',
      uncertaintyValues: { 'type': 'array', 'itemType': GetDataQualityAnalysisResponseBodyDataUncertaintyValues },
    };
  }

  validate() {
    if(Array.isArray(this.dataQuality)) {
      $dara.Model.validateArray(this.dataQuality);
    }
    if(this.dataQualityResult && typeof (this.dataQualityResult as any).validate === 'function') {
      (this.dataQualityResult as any).validate();
    }
    if(Array.isArray(this.sensitivityList)) {
      $dara.Model.validateArray(this.sensitivityList);
    }
    if(Array.isArray(this.uncertaintyValues)) {
      $dara.Model.validateArray(this.uncertaintyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

