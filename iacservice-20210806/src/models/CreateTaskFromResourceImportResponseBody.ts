// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskFromResourceImportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
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

