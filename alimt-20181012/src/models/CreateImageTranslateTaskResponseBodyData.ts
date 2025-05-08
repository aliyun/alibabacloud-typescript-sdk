// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * A41F6E25-8520-4AF0-90EF-111111
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

