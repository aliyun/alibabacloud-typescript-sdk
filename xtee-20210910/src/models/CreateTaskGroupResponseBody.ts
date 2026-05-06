// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskGroupResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1750645267000
   */
  createTime?: number;
  /**
   * @example
   * 345298
   */
  creatorUserId?: number;
  /**
   * @example
   * RUNNING
   */
  groupStatus?: string;
  sampleNames?: string[];
  /**
   * @example
   * 3
   */
  subTaskCount?: number;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * g-0jlcreertd0p471l6f72
   */
  taskGroupId?: number;
  /**
   * @example
   * GroupTest
   */
  taskGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorUserId: 'CreatorUserId',
      groupStatus: 'GroupStatus',
      sampleNames: 'SampleNames',
      subTaskCount: 'SubTaskCount',
      tab: 'Tab',
      taskGroupId: 'TaskGroupId',
      taskGroupName: 'TaskGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorUserId: 'number',
      groupStatus: 'string',
      sampleNames: { 'type': 'array', 'itemType': 'string' },
      subTaskCount: 'number',
      tab: 'string',
      taskGroupId: 'number',
      taskGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sampleNames)) {
      $dara.Model.validateArray(this.sampleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  resultObject?: CreateTaskGroupResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: CreateTaskGroupResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

