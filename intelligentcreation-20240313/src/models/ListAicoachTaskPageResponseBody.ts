// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachTaskPageResponseBodyTaskList } from "./ListAicoachTaskPageResponseBodyTaskList";


export class ListAICoachTaskPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D7F2B74F-63F2-5DD6-95E4-F408EAD6617E
   */
  requestId?: string;
  taskList?: ListAICoachTaskPageResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListAICoachTaskPageResponseBodyTaskList },
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

