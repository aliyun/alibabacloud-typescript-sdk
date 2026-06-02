// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @example
   * 9f84892d-721a-4069-9975-668c8164d64e
   */
  jobGroupId?: string;
  /**
   * @example
   * edf45790-7200-4cbc-b157-8c0a5f400b75
   */
  jobId?: string[];
  /**
   * @example
   * 4a875676-b136-4087-88b4-de67c61fed69
   */
  jobReferenceId?: string[];
  /**
   * @example
   * 9cef0dd3-b9d6-4748-9a6f-77a8c3402bb1
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

