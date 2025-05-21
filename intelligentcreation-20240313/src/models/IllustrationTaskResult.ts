// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IllustrationTask } from "./IllustrationTask";


export class IllustrationTaskResult extends $dara.Model {
  illustrationTask?: IllustrationTask;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illustrationTask: 'illustrationTask',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustrationTask: IllustrationTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.illustrationTask && typeof (this.illustrationTask as any).validate === 'function') {
      (this.illustrationTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

