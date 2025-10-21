// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobStatusRunning extends $dara.Model {
  /**
   * @example
   * 4
   */
  observedFlinkJobRestarts?: number;
  /**
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

