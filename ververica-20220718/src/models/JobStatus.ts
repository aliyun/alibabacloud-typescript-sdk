// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobFailure } from "./JobFailure";
import { JobStatusRunning } from "./JobStatusRunning";


export class JobStatus extends $dara.Model {
  /**
   * @example
   * RUNNING
   */
  currentJobStatus?: string;
  failure?: JobFailure;
  healthScore?: number;
  riskLevel?: string;
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

