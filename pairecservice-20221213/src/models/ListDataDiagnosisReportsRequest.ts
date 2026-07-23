// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The end date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-01
   */
  endDate?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * feature1
   */
  featureName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The retention rate report type.
   * 
   * - Period: A report for the specified time period.
   * 
   * @example
   * Period
   */
  remainRateType?: string;
  /**
   * @remarks
   * The start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-01
   */
  startDate?: string;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 3
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      featureName: 'FeatureName',
      instanceId: 'InstanceId',
      remainRateType: 'RemainRateType',
      startDate: 'StartDate',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      featureName: 'string',
      instanceId: 'string',
      remainRateType: 'string',
      startDate: 'string',
      topN: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

