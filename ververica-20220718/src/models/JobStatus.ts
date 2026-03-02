// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobFailure } from "./JobFailure";
import { JobStatusRunning } from "./JobStatusRunning";


export class JobStatus extends $dara.Model {
  /**
   * @remarks
   * The status of the current job. Valid values:
   * 
   * *   STARTING
   * *   RUNNING
   * *   CANCELLING
   * *   FAILED
   * *   CANCELLED
   * *   FINISHED
   * 
   * @example
   * RUNNING
   */
  currentJobStatus?: string;
  /**
   * @remarks
   * The information about the job failure. This parameter is valid when the value of the currentJobStatus parameter is FAILED.
   */
  failure?: JobFailure;
  healthScore?: number;
  riskLevel?: string;
  /**
   * @remarks
   * The details of the job. This parameter is valid when the value of the currentJobStatus parameter is RUNNING.
   */
  running?: JobStatusRunning;
  static names(): { [key: string]: string } {
    return {
      currentJobStatus: 'currentJobStatus',
      failure: 'failure',
      healthScore: 'healthScore',
      riskLevel: 'riskLevel',
      running: 'running',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentJobStatus: 'string',
      failure: JobFailure,
      healthScore: 'number',
      riskLevel: 'string',
      running: JobStatusRunning,
    };
  }

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    if(this.running && typeof (this.running as any).validate === 'function') {
      (this.running as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

