// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobsStatusDetailValue } from "./JobsStatusDetailValue";


export class ListJobsResponseBodyJobsConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the job is a destroy job.
   * 
   * @example
   * true
   */
  isDestroy?: boolean;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * moduleDescription
   */
  moduleDescription?: string;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * v4
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The resource change content.
   * 
   * @example
   * +0 ~0 -0
   */
  resourcesChanged?: string;
  /**
   * @remarks
   * The operation command.
   * 
   * @example
   * destroy
   */
  subCommand?: string;
  static names(): { [key: string]: string } {
    return {
      isDestroy: 'isDestroy',
      moduleDescription: 'moduleDescription',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDestroy: 'boolean',
      moduleDescription: 'string',
      moduleVersion: 'string',
      resourcesChanged: 'string',
      subCommand: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The job configuration.
   */
  config?: ListJobsResponseBodyJobsConfig;
  /**
   * @remarks
   * The time when the job was created, in UTC in the ISO 8601 format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-05T02:13:43Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * plan
   */
  description?: string;
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 5m
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The execution type. Valid values:
   * 
   * - Manual: Manual execution (default).
   * - Auto: Automatic execution.
   * 
   * @example
   * Manual
   */
  executeType?: string;
  /**
   * @remarks
   * Indicates whether the assertion check passed.
   * 
   * @example
   * true
   */
  isPassAssertCheck?: boolean;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-433aff9e4dca57b147c
   */
  jobId?: string;
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
   * The status details.
   */
  statusDetail?: { [key: string]: JobsStatusDetailValue };
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-518876866c2c3efb
   */
  taskId?: string;
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.240.0
   */
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      elapsedTime: 'elapsedTime',
      executeType: 'executeType',
      isPassAssertCheck: 'isPassAssertCheck',
      jobId: 'jobId',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListJobsResponseBodyJobsConfig,
      createTime: 'string',
      description: 'string',
      elapsedTime: 'number',
      executeType: 'string',
      isPassAssertCheck: 'boolean',
      jobId: 'string',
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobsStatusDetailValue },
      taskId: 'string',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.statusDetail) {
      $dara.Model.validateMap(this.statusDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of job information.
   */
  jobs?: ListJobsResponseBodyJobs[];
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
   * The request ID.
   * 
   * @example
   * 882304F9-6DB1-5593-A719-33473D082B9C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

