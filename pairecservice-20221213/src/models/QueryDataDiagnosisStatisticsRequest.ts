// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataDiagnosisStatisticsRequest extends $dara.Model {
  /**
   * @example
   * 2023-08-08
   */
  endDate?: string;
  /**
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @example
   * Period
   */
  remainRateType?: string;
  /**
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

