// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetProjectTaskShrinkRequest extends $dara.Model {
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskIdListShrink: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

