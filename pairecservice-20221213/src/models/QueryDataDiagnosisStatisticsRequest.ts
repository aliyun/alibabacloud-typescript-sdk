// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataDiagnosisStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end date.
   * 
   * @example
   * 2023-08-08
   */
  endDate?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The retention rate report type.
   * 
   * - Period: A periodic report.
   * 
   * @example
   * Period
   */
  remainRateType?: string;
  /**
   * @remarks
   * The start date.
   * 
   * @example
   * 2023-08-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      remainRateType: 'RemainRateType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      instanceId: 'string',
      remainRateType: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

