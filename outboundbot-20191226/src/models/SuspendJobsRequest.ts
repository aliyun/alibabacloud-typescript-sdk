// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter condition: whether to suspend all jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * ef4c09ac-2f5c-49e7-9d33-5d85249cee10
   */
  instanceId?: string;
  /**
   * @remarks
   * Filter condition, task group ID.
   * 
   * @example
   * 6b3ea2a1-32b3-4041-842b-9bde5de9dda0
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job ID list.
   * 
   * > When ALL is false, JobId is required.
   * 
   * @example
   * 11994321-e6bc-47bb-8b1c-8eef8f2f768b
   */
  jobId?: string[];
  /**
   * @remarks
   * Third-party ID of the job.
   * 
   * > This is the ReferenceId uploaded by the customer when uploading the outbound list.
   * 
   * @example
   * de3ab269-6746-477c-b13d-bd49f13202c2
   */
  jobReferenceId?: string[];
  /**
   * @remarks
   * Filter condition, scenario ID (historical parameter, deprecated).
   * 
   * @example
   * 4b6dd926-3cc3-4111-a333-15d9b006fe81
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

