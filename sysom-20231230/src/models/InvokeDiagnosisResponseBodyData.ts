// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeDiagnosisResponseBodyData extends $dara.Model {
  /**
   * @example
   * ihqhAcrt
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

