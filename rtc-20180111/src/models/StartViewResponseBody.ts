// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartViewResponseBody extends $dara.Model {
  /**
   * @example
   * FA2F9DE9-8EAD-580E-87DF-A3D25EE87C37
   */
  requestId?: string;
  /**
   * @example
   * 123
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

