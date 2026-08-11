// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * Default
   */
  jobType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results returned per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Pending: The initial status after the job is created.
   * - PlanQueued: After the job is created, if no workflow is available, the job is queued.
   * - Planning: The resource job is in the Plan execution phase.
   * - ConfigProactiveInProgress: Compliance pre-check is in progress. The account must have the compliance pre-check feature enabled.
   * - ConfigProactiveSuccess: Compliance pre-check succeeded. The account must have the compliance pre-check feature enabled.
   * - Planned: The resource job has completed Plan execution.
   * - PlannedAndFinished: After Plan execution is completed, no diff is found. This is a final status.
   * - Confirmed: The resource job is waiting for confirmation after Plan execution is completed.
   * - ApplyQueued: During job execution, if no workflow is available, the job is queued.
   * - Applying: The resource job is in the Apply execution phase.
   * - Applied: The resource job has completed Apply execution. This is a final status.
   * - Errored: The job execution encountered an error. This is a final status.
   * - Canceled: The job execution was canceled. This is a final status.
   * - Discarded: The plan of the resource job was discarded. This is a final status.
   * - ConfigProactiveFailure: Compliance pre-check failed. The account must have the compliance pre-check feature enabled.
   * 
   * @example
   * Errored
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - Task: Regular task (default).
   * - SceneTestingTask: Scenario-based testing task.
   * 
   * @example
   * SceneTestingTask
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'jobType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

