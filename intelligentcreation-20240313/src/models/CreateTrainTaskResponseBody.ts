// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 84657DE0-B68C-508B-AFE7-8ED921854E3C
   */
  requestId?: string;
  /**
   * @example
   * 837091359375048704
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

