// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCalculationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AB metric ID.
   * 
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @remarks
   * The AB metric name.
   * 
   * @example
   * pv
   */
  ABMetricName?: string;
  /**
   * @remarks
   * The business date. The value is in YYYY-MM-DD format.
   * 
   * @example
   * 2021-12-15
   */
  bizDate?: string;
  /**
   * @remarks
   * The task configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The time when the task ran. The value is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtRanTime?: string;
  /**
   * @remarks
   * The task information.
   */
  jobMessage?: string[];
  /**
   * @remarks
   * The task source. Valid values:
   * - CronOffline: a scheduled offline task.
   * - DataRerun: a data rerun task.
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
   * The status of the compute task. Valid values:
   * - Success: The task succeeded.
   * - Failure: The task failed.
   * - Initializing: The task is being initialized.
   * - Running: The task is running.
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

