// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0970A1-0434-5C83-B560-613EBA11B525
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 238028563
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

