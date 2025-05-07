// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FetchImageTaskResponseBodyDataTaskInfoList } from "./FetchImageTaskResponseBodyDataTaskInfoList";


export class FetchImageTaskResponseBodyData extends $dara.Model {
  taskInfoList?: FetchImageTaskResponseBodyDataTaskInfoList[];
  static names(): { [key: string]: string } {
    return {
      taskInfoList: 'TaskInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfoList: { 'type': 'array', 'itemType': FetchImageTaskResponseBodyDataTaskInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.taskInfoList)) {
      $dara.Model.validateArray(this.taskInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

