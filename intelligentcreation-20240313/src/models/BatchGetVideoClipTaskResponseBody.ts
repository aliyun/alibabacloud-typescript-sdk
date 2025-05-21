// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetVideoClipTaskResponseBodyTaskList } from "./BatchGetVideoClipTaskResponseBodyTaskList";


export class BatchGetVideoClipTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  taskList?: BatchGetVideoClipTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': BatchGetVideoClipTaskResponseBodyTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

