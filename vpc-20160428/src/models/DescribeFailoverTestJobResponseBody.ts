// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailoverTestJobResponseBodyFailoverTestJobModel extends $dara.Model {
  /**
   * @remarks
   * The description of the failover test job.
   * 
   * The description is 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The failover test duration. Unit: minutes. Valid values: **1 to 4320**.
   * 
   * @example
   * 60
   */
  jobDuration?: string;
  /**
   * @remarks
   * The failover test job ID.
   * 
   * @example
   * ftj-bp1yh6mvi13aq3g8w****
   */
  jobId?: string;
  /**
   * @remarks
   * The failover test type. Valid values:
   * 
   * - **StartNow**: start immediately. The test starts immediately after the job is created.
   * 
   * - **StartLater**: start later. Only the test job is created without starting the test.
   * 
   * @example
   * StartNow
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the failover test job.
   * 
   * The name is 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of failover test resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The failover test resource type. Valid values: **PHYSICALCONNECTION**: Express Connect circuit.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the failover test job. The time is displayed in UTC in the YYYY-MM-DDThh:mm:ssZ format as defined by ISO 8601.
   * 
   * @example
   * 2023-11-21T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the failover test job. Valid values:
   * 
   * - **Init**: pending.
   * 
   * - **Starting**: starting.
   * 
   * - **Testing**: in progress.
   * 
   * - **Stopping**: stopping.
   * 
   * - **Stopped**: completed.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The end time of the failover test job. The time is displayed in UTC in the YYYY-MM-DDThh:mm:ssZ format as defined by ISO 8601.
   * 
   * @example
   * 2023-11-21T15:00:00Z
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      jobDuration: 'JobDuration',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      jobDuration: 'string',
      jobId: 'string',
      jobType: 'string',
      name: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFailoverTestJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The failover test job.
   */
  failoverTestJobModel?: DescribeFailoverTestJobResponseBodyFailoverTestJobModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C44F62BE-9CE7-4277-B117-69243F3988BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failoverTestJobModel: 'FailoverTestJobModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverTestJobModel: DescribeFailoverTestJobResponseBodyFailoverTestJobModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.failoverTestJobModel && typeof (this.failoverTestJobModel as any).validate === 'function') {
      (this.failoverTestJobModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

