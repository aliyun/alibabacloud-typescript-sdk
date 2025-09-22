// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmissionSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Percentage of scheduled.
   * 
   * @example
   * 2.7657
   */
  actualEmissionRatio?: number;
  /**
   * @remarks
   * Carbon emissions reduction.
   * 
   * @example
   * 0.0
   */
  carbonSaveConversion?: number;
  /**
   * @remarks
   * Statistical indicators for this cycle.
   * 
   * @example
   * 276.4
   */
  currentPeriodCarbonEmissionData?: number;
  /**
   * @remarks
   * Whether to show the weighting ratio carbon emission.
   * 
   * @example
   * true
   */
  isWeighting?: boolean;
  /**
   * @remarks
   * Last period statistical indicators.
   * 
   * @example
   * 9.40100
   */
  lastPeriodCarbonEmissionData?: number;
  /**
   * @remarks
   * Calculation of carbon emissions based on shareholding ratio in the last cycle.
   * 
   * @example
   * 8.4609
   */
  lastPeriodWeightingCarbonEmissionData?: number;
  /**
   * @remarks
   * Year-on-year.
   * 
   * @example
   * 28.410
   */
  ratio?: number;
  /**
   * @remarks
   * Total carbon emissions.
   * 
   * @example
   * 276.46
   */
  totalCarbonEmissionData?: number;
  /**
   * @remarks
   * Calculate carbon emissions by share ratio
   * 
   * @example
   * 248.81400
   */
  weightingCarbonEmissionData?: number;
  /**
   * @remarks
   * Year-on-year of weighting ratio carbon emissions.
   * 
   * @example
   * 28.4102
   */
  weightingRatio?: number;
  static names(): { [key: string]: string } {
    return {
      actualEmissionRatio: 'actualEmissionRatio',
      carbonSaveConversion: 'carbonSaveConversion',
      currentPeriodCarbonEmissionData: 'currentPeriodCarbonEmissionData',
      isWeighting: 'isWeighting',
      lastPeriodCarbonEmissionData: 'lastPeriodCarbonEmissionData',
      lastPeriodWeightingCarbonEmissionData: 'lastPeriodWeightingCarbonEmissionData',
      ratio: 'ratio',
      totalCarbonEmissionData: 'totalCarbonEmissionData',
      weightingCarbonEmissionData: 'weightingCarbonEmissionData',
      weightingRatio: 'weightingRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEmissionRatio: 'number',
      carbonSaveConversion: 'number',
      currentPeriodCarbonEmissionData: 'number',
      isWeighting: 'boolean',
      lastPeriodCarbonEmissionData: 'number',
      lastPeriodWeightingCarbonEmissionData: 'number',
      ratio: 'number',
      totalCarbonEmissionData: 'number',
      weightingCarbonEmissionData: 'number',
      weightingRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of summarized data
   */
  data?: GetEmissionSummaryResponseBodyData;
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
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
      data: GetEmissionSummaryResponseBodyData,
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

