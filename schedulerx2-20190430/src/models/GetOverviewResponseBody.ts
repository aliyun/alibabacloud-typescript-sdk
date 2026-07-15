// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The overview data in JSON format, which corresponds to the overview data on the console. The result is returned in one of the following three formats:
   * - Basic information.
   * - Node runtime information within a time interval.
   * - Node runtime timing information within a time interval. This format returns statistics information at each time point for three data items: node triggers, successful executions, and failed executions.
   * 
   * @example
   * Basic info: {"schedulerx_job_counter_disable": "4","schedulerx_job_trigger_counter_running": "0","schedulerx_job_counter_enable": "70","schedulerx_job_counter_all": "74","schedulerx_worker_counter": "2"}
   */
  data?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * No access permission for the namespace [***]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

