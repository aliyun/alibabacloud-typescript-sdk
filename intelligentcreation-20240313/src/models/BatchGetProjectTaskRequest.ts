// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetProjectTaskRequest extends $dara.Model {
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIdList)) {
      $dara.Model.validateArray(this.taskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

