// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseAITaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 936C7025-27A5-4CB1-BB31-540E1F0CCA12
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task for disabling the PolarDB for AI feature.
   * 
   * @example
   * 53879cdb-9a00-428e-acaf-ff4cff******
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

