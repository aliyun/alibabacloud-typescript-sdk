// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportInterveneFileAsyncResponseBodyData extends $dara.Model {
  code?: number;
  failIdList?: string[];
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failIdList)) {
      $dara.Model.validateArray(this.failIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

