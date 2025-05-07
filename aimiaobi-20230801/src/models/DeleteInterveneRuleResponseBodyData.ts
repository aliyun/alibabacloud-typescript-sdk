// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterveneRuleResponseBodyData extends $dara.Model {
  failIdList?: string[];
  /**
   * @example
   * dt-s50ntwtywb4y
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

