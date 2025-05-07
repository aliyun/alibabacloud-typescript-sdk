// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustinsResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B5A6839-31A7-58D4-9F96-772BFAFD1CB5
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 507******
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

