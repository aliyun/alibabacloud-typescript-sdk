// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * de48407d-309e-451a-81ec-6fb11f8fdbf3
   */
  jobGroupId?: string;
  /**
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string[];
  /**
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  jobReferenceId?: string[];
  /**
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

