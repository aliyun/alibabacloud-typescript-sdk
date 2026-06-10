// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to cancel all jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * A filter condition. The task group ID.
   * 
   * @example
   * 9f84892d-721a-4069-9975-668c8164d64e
   */
  jobGroupId?: string;
  /**
   * @remarks
   * A filter condition. The job ID.
   * 
   * > The JobId parameter is required when the All parameter is set to false.
   * 
   * @example
   * edf45790-7200-4cbc-b157-8c0a5f400b75
   */
  jobId?: string[];
  /**
   * @remarks
   * A filter condition. The reference ID of the job.
   * 
   * > This is the ReferenceId that you specified when you uploaded the contact list.
   * 
   * @example
   * 4a875676-b136-4087-88b4-de67c61fed69
   */
  jobReferenceId?: string[];
  /**
   * @remarks
   * A filter condition. The scenario ID.
   * 
   * > Obtain this ID by calling the DescribeJobGroup operation.
   * 
   * @example
   * 35641113-b2f6-464e-a772-25c25554798b
   */
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobId)) {
      $dara.Model.validateArray(this.jobId);
    }
    if(Array.isArray(this.jobReferenceId)) {
      $dara.Model.validateArray(this.jobReferenceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

