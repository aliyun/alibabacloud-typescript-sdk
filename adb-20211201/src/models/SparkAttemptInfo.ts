// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Detail } from "./Detail";


export class SparkAttemptInfo extends $dara.Model {
  /**
   * @example
   * s202207151211hz0cb4200*****-0001
   */
  attemptId?: string;
  detail?: Detail;
  /**
   * @example
   * WARN: Disk is full
   */
  message?: string;
  /**
   * @example
   * NORMAL
   */
  priority?: string;
  /**
   * @example
   * RUNNING
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

