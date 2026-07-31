// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Detail } from "./Detail";


export class SparkAttemptInfo extends $dara.Model {
  /**
   * @remarks
   * The attempt ID of the Spark application.
   * 
   * @example
   * s202207151211hz****-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The information about the Spark application.
   */
  detail?: Detail;
  /**
   * @remarks
   * The alert message returned, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * WARN: Disk is full
   */
  message?: string;
  /**
   * @remarks
   * The attempt priority of the Spark application.
   * 
   * @example
   * NORMAL
   */
  priority?: string;
  /**
   * @remarks
   * The state of the Spark application. Valid values:
   * 
   * *   **SUBMITTED**
   * *   **STARTING**
   * *   **RUNNING**
   * *   **FAILING**
   * *   **FAILED**
   * *   **KILLING**
   * *   **KILLED**
   * *   **SUCCEEDING**
   * *   **COMPLETED**
   * *   **FATAL**
   * *   **UNKNOWN**
   * 
   * @example
   * SUBMITTED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'AttemptId',
      detail: 'Detail',
      message: 'Message',
      priority: 'Priority',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      detail: Detail,
      message: 'string',
      priority: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

