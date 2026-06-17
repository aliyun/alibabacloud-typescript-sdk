// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FB718F0-CC04-5A12-B17B-188CFC3F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of task IDs.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

