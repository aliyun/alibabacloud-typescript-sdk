// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Context } from "./Context";


export class TaskSpec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * my-task-template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      templateName: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

