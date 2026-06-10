// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter condition: Specifies whether to restart all jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Filter condition: Task group ID.
   * 
   * @example
   * de48407d-309e-451a-81ec-6fb11f8fdbf3
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job ID list.
   * 
   * > This parameter is required when All is false.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string[];
  /**
   * @remarks
   * Third-party ID of the job.
   * 
   * > This is the ReferenceId uploaded by the customer when uploading the outbound list.
   * 
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  jobReferenceId?: string[];
  /**
   * @remarks
   * Filter condition: Scenario ID (historical parameter, deprecated).
   * 
   * @example
   * b016fbdb-b81c-4c06-8870-cb36b8783b6d
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

