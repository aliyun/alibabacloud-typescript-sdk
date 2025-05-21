// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetTrainTaskRequest extends $dara.Model {
  /**
   * @example
   * 1524004782431111
   */
  aliyunMainId?: string;
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
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

