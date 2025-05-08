// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * D3920BC3-A395-4CAD-9E84-7C39EB07507B
   */
  requestId?: string;
  /**
   * @example
   * ready
   */
  status?: string;
  /**
   * @example
   * 0586df512c8b4bb382d7d9a6a01b5854
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
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

