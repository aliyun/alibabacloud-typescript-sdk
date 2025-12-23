// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledTask } from "./ScheduledTask";


export class CreateScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ScheduledTask;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ScheduledTask,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

