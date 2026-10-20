// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayJobResponseBodyRayJobs extends $dara.Model {
  /**
   * @remarks
   * The status of the corresponding Ray cluster. Valid values:
   * - Deleted: The cluster is deleted.
   * - Submitted: The cluster is submitted but not yet created.
   * - Pending: The cluster is being created.
   * - Running: The cluster is running.
   * 
   * @example
   * Running
   */
  clusterState?: string;
  /**
   * @remarks
   * The nickname of the creator.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The number of compute units (CUs) consumed during the job runtime. This value is an estimate. The actual value is subject to the bill.
   * 
   * @example
   * 120
   */
  cuHours?: number;
  /**
   * @remarks
   * The URL of the Ray cluster dashboard. If the Ray cluster is in the Running state, the URL points to the Runtime UI. If the cluster is in the Deleted state, the URL points to the History UI. The History UI is supported only in err-1.2.0 and later.
   * 
   * @example
   * https://emr-ray-gateway.aliyuncs.com?token=xxxxxxxxx
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * The execution duration of the job, in seconds.
   * 
   * @example
   * 3564
   */
  duration?: number;
  /**
   * @remarks
   * The time when the job ended. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1776945509000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the Ray job.
   * 
   * @example
   * testRayJob
   */
  name?: string;
  /**
   * @remarks
   * The Ray engine version.
   * 
   * @example
   * err-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  resourceQueue?: string;
  /**
   * @remarks
   * The time when the job was started. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1776945499000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the job. Valid values:
   * - Submitted: The job is submitted.
   * - Pending: The cluster is being created.
   * - Running: The job is running.
   * - Succeeded: The job succeeded.
   * - Failed: The job failed.
   * - Cancelling: The job is being cancelled.
   * - Cancelled: The job is cancelled.
   * - Timeout: The job is cancelled due to a timeout.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Ray job.
   * 
   * @example
   * rj-uiulpgow9xljimm1
   */
  submissionId?: string;
  /**
   * @remarks
   * The time when the job was submitted. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1776945399000
   */
  submitTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterState: 'clusterState',
      creatorName: 'creatorName',
      cuHours: 'cuHours',
      dashboardUrl: 'dashboardUrl',
      duration: 'duration',
      endTime: 'endTime',
      name: 'name',
      resourceQueue: 'resourceQueue',
      startTime: 'startTime',
      status: 'status',
      submissionId: 'submissionId',
      submitTime: 'submitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterState: 'string',
      creatorName: 'string',
      cuHours: 'number',
      dashboardUrl: 'string',
      duration: 'number',
      endTime: 'number',
      name: 'string',
      resourceQueue: 'string',
      startTime: 'number',
      status: 'string',
      submissionId: 'string',
      submitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRayJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Ray jobs.
   */
  rayJobs?: ListRayJobResponseBodyRayJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      rayJobs: 'rayJobs',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rayJobs: { 'type': 'array', 'itemType': ListRayJobResponseBodyRayJobs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rayJobs)) {
      $dara.Model.validateArray(this.rayJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

