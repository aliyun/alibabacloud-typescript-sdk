// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextTask } from "./TextTask";


export class TextTaskResult extends $dara.Model {
  textTask?: TextTask;
  static names(): { [key: string]: string } {
    return {
      textTask: 'textTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textTask: TextTask,
    };
  }

  validate() {
    if(this.textTask && typeof (this.textTask as any).validate === 'function') {
      (this.textTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

