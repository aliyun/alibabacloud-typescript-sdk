// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTaskByParamResponseBodyDataTask } from "./QueryTaskByParamResponseBodyDataTask";


export class QueryTaskByParamResponseBodyData extends $dara.Model {
  task?: QueryTaskByParamResponseBodyDataTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': QueryTaskByParamResponseBodyDataTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

