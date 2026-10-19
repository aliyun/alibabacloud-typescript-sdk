// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7FEF1BEF-2842-5758-9126-415A297XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123456
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

