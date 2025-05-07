// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneGlobalReplyResponseBodyData extends $dara.Model {
  failIdList?: string[];
  /**
   * @example
   * 4829
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

