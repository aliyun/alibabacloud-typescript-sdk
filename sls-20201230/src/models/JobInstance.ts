// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobInstance extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1784045339385
   */
  beginTimeInMillis?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1784045339385
   */
  createTimeInMillis?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 加工作业
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * filter-get-request
   */
  displayName?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 401
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * QueryErr(InvalidQuery): invalid metric keys provided: [metric_key1, metric_key2]
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 467b2b2cb7de2a9-656946cb235f3-52f6f88
   */
  instanceId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * alimm_onebp_dtc_scs_prod_m_i_1561_p_x_1
   */
  jobName?: string;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * 5a4093d6cb4ed7e8bca3745b221af4c8
   */
  jobScheduleId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * The scheduled time.
   * 
   * @example
   * 1784045339385
   */
  scheduleTimeInMillis?: number;
  /**
   * @remarks
   * The current execution status.
   * 
   * @example
   * FAILED
   */
  state?: string;
  /**
   * @remarks
   * The schedule title.
   * 
   * @example
   * {\\"pubNet\\":0,\\"queryId\\":\\"6A565F1DD71457AD541DEC77_76\\",\\"shipBytes\\":0,\\"shipLines\\":0,\\"sqlCPUMillis\\":0,\\"sqlCostMillis\\":0,\\"sqlFromTime\\":1784041200,\\"sqlProcessedBytes\\":0,\\"sqlProcessedLines\\":0,\\"sqlProgress\\":\\"\\",\\"sqlResultLines\\":0,\\"sqlState\\":\\"FAILED\\",\\"sqlToTime\\":1784044800,\\"userInfo\\":\\"\\"}
   */
  summary?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1784045339385
   */
  updateTimeInMillis?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeInMillis: 'beginTimeInMillis',
      createTimeInMillis: 'createTimeInMillis',
      description: 'description',
      displayName: 'displayName',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      instanceId: 'instanceId',
      jobName: 'jobName',
      jobScheduleId: 'jobScheduleId',
      result: 'result',
      scheduleTimeInMillis: 'scheduleTimeInMillis',
      state: 'state',
      summary: 'summary',
      updateTimeInMillis: 'updateTimeInMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeInMillis: 'number',
      createTimeInMillis: 'number',
      description: 'string',
      displayName: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      jobName: 'string',
      jobScheduleId: 'string',
      result: 'string',
      scheduleTimeInMillis: 'number',
      state: 'string',
      summary: 'string',
      updateTimeInMillis: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

