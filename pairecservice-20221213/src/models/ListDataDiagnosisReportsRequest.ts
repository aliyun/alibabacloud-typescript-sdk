// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisReportsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-02-01
   */
  endDate?: string;
  /**
   * @example
   * feature1
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * Period
   */
  remainRateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-01-01
   */
  startDate?: string;
  /**
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

