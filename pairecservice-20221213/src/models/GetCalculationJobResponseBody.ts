// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCalculationJobResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @example
   * pv
   */
  ABMetricName?: string;
  /**
   * @example
   * 2021-12-15
   */
  bizDate?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtRanTime?: string;
  jobMessage?: string[];
  /**
   * @example
   * CronOffline
   */
  jobSource?: string;
  /**
   * @example
   * 7D59453C-48AA-5FC5-8848-2D373BD1A17F
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      ABMetricName: 'ABMetricName',
      bizDate: 'BizDate',
      config: 'Config',
      gmtRanTime: 'GmtRanTime',
      jobMessage: 'JobMessage',
      jobSource: 'JobSource',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricId: 'string',
      ABMetricName: 'string',
      bizDate: 'string',
      config: 'string',
      gmtRanTime: 'string',
      jobMessage: { 'type': 'array', 'itemType': 'string' },
      jobSource: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobMessage)) {
      $dara.Model.validateArray(this.jobMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

