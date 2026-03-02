// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobStatusRunning extends $dara.Model {
  /**
   * @remarks
   * The number of times the job is restarted.
   * 
   * @example
   * 4
   */
  observedFlinkJobRestarts?: number;
  /**
   * @remarks
   * The status of the Flink job.
   * 
   * @example
   * RUNNING
   */
  observedFlinkJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      observedFlinkJobRestarts: 'observedFlinkJobRestarts',
      observedFlinkJobStatus: 'observedFlinkJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      observedFlinkJobRestarts: 'number',
      observedFlinkJobStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

