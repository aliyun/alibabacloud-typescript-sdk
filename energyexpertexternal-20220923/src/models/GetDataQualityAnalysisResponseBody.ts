// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAnalysisResponseBodyDataDataQualityScore extends $dara.Model {
  /**
   * @remarks
   * Data quality evaluation indicator 1: activity data credibility.
   * 
   * @example
   * 3
   */
  g1?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 2: data factor reliability.
   * 
   * @example
   * 3
   */
  g2?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 3: time representativeness.
   * 
   * @example
   * 3
   */
  g3?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 4: geographic representativeness.
   * 
   * @example
   * 3
   */
  g4?: number;
  static names(): { [key: string]: string } {
    return {
      g1: 'g1',
      g2: 'g2',
      g3: 'g3',
      g4: 'g4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      g1: 'number',
      g2: 'number',
      g3: 'number',
      g4: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataDataQuality extends $dara.Model {
  /**
   * @remarks
   * Inventory name
   * 
   * @example
   * energy
   */
  inventory?: string;
  /**
   * @remarks
   * Score. The distribution ranges from 1 to 5. A value closer to 1 indicates better data quality.
   */
  score?: GetDataQualityAnalysisResponseBodyDataDataQualityScore;
  static names(): { [key: string]: string } {
    return {
      inventory: 'inventory',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: 'string',
      score: GetDataQualityAnalysisResponseBodyDataDataQualityScore,
    };
  }

  validate() {
    if(this.score && typeof (this.score as any).validate === 'function') {
      (this.score as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataDataQualityResult extends $dara.Model {
  /**
   * @remarks
   * The score. This parameter is applicable to DQR results. The distribution ranges from 1 to 5. A value closer to 1 indicates better data quality. The number of valid digits is kept to four decimal places.
   * 
   * @example
   * 1.2345
   */
  dataQualityScore?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 1: activity data credibility.
   * 
   * @example
   * 1.2345
   */
  g1?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 2: data factor reliability.
   * 
   * @example
   * 1.2345
   */
  g2?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 3: time representativeness.
   * 
   * @example
   * 1.2345
   */
  g3?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 4: geographic representativeness.
   * 
   * @example
   * 1.2345
   */
  g4?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityScore: 'data_quality_score',
      g1: 'g1',
      g2: 'g2',
      g3: 'g3',
      g4: 'g4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScore: 'number',
      g1: 'number',
      g2: 'number',
      g3: 'number',
      g4: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataSensitivityList extends $dara.Model {
  /**
   * @remarks
   * Inventory id
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Name of the inventory item.
   * 
   * @example
   * energy
   */
  inventory?: string;
  /**
   * @remarks
   * List of emission reduction measures.
   */
  reductionList?: string[];
  /**
   * @remarks
   * Sensitivity percentage.
   * 
   * @example
   * 91.7
   */
  sensitivity?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      inventory: 'inventory',
      reductionList: 'reductionList',
      sensitivity: 'sensitivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inventory: 'string',
      reductionList: { 'type': 'array', 'itemType': 'string' },
      sensitivity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reductionList)) {
      $dara.Model.validateArray(this.reductionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataUncertaintyValues extends $dara.Model {
  /**
   * @remarks
   * The name of the inventory. Format: process name / inventory name.
   * 
   * @example
   * process-1/inventory-1
   */
  inventory?: string;
  /**
   * @remarks
   * Inventory uncertainty absolute contribution size. The impact of the quality of each inventory data on the carbon footprint results in the modeling process, when the uncertain contribution of a list is large, please improve its data quality as much as possible to improve the accuracy of carbon footprint analysis. The meaning of "1.4964" is not determined to contribute 1.4964 kgCO₂ e/unit, where unit is the unit of the product.
   * 
   * @example
   * 1.4964
   */
  uncertaintyContribution?: string;
  static names(): { [key: string]: string } {
    return {
      inventory: 'inventory',
      uncertaintyContribution: 'uncertaintyContribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: 'string',
      uncertaintyContribution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetDataQualityAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetDataQualityAnalysisResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataQualityAnalysisResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

