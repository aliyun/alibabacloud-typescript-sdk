// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachTaskPageResponseBodyTaskList extends $dara.Model {
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  finishTime?: string;
  gmtCreate?: string;
  /**
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * 222
   */
  studentId?: string;
  /**
   * @example
   * 11111111111
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'finishTime',
      gmtCreate: 'gmtCreate',
      status: 'status',
      studentId: 'studentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      gmtCreate: 'string',
      status: 'string',
      studentId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListAICoachTaskPageResponseBodyTaskList },
      total: 'number',
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

