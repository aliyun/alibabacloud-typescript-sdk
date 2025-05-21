// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetTrainTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1524004782431111
   */
  aliyunMainId?: string;
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      taskIdListShrink: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      taskIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

