// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCalculationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AB metric.
   * 
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @remarks
   * The name of the AB metric.
   * 
   * @example
   * pv
   */
  ABMetricName?: string;
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2021-12-15
   */
  bizDate?: string;
  /**
   * @remarks
   * The job configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The runtime of the job.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtRanTime?: string;
  /**
   * @remarks
   * The job messages.
   */
  jobMessage?: string[];
  /**
   * @remarks
   * The job source. Valid values:
   * 
   * - CronOffline: An offline cron job.
   * 
   * - DataRerun: A data rerun task.
   * 
   * @example
   * CronOffline
   */
  jobSource?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D59453C-48AA-5FC5-8848-2D373BD1A17F
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the calculation job. Valid values:
   * 
   * - Success: The job completed successfully.
   * 
   * - Failure: The job failed.
   * 
   * - Initializing: The job is initializing.
   * 
   * - Running: The job is running.
   * 
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

