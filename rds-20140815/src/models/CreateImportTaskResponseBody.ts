// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
   */
  requestId?: string;
  /**
   * @example
   * 3384382
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
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

