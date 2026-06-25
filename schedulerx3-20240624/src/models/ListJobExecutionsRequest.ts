// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-11-12 20:50:56
   */
  endTime?: string;
  /**
   * @remarks
   * The job execution ID.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-11-12 20:50:55
   */
  startTime?: string;
  /**
   * @remarks
   * The job execution status. Valid values:
   * 
   * - 0: **UNKNOWN**.
   * 
   * - 1: **WAITING**.
   * 
   * - 2: **READY**.
   * 
   * - 3: **RUNNING**.
   * 
   * - 4: **SUCCESS**.
   * 
   * - 5: **FAILED**.
   * 
   * - 6: **PAUSED**.
   * 
   * - 7: **SUBMITTED**.
   * 
   * - 8: **REJECTED**.
   * 
   * - 9: **ACCEPTED**.
   * 
   * - 10: **PARTIAL_FAILED**.
   * 
   * - 11: **SKIPPED**.
   * 
   * - 12: **REMOVED**.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The workflow execution ID.
   * 
   * @example
   * 100
   */
  workflowExecutionId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
      jobName: 'JobName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      workflowExecutionId: 'WorkflowExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
      jobName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'number',
      workflowExecutionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

