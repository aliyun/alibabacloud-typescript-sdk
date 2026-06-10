// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of business types.
   */
  bizTypeList?: string[];
  /**
   * @remarks
   * The UTC time when the task was created.
   * 
   * @example
   * 2021-09-11T09:26:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the task.
   * 
   * @example
   * 9052
   */
  createUserId?: number;
  /**
   * @remarks
   * The username of the user who created the task.
   * 
   * @example
   * xuqiang_test
   */
  createUserName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 检查待发布模块是否空闲发生错误，faq
   */
  error?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8521
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CBF0581-EAE7-1DC4-95C6-A089656A1E2D
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID. This parameter is an alias for `Id`.
   * 
   * @example
   * 8521
   */
  response?: number;
  /**
   * @remarks
   * The task status. For more information about possible states, see the GetInstancePublishTaskState API operation.
   * 
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      error: 'Error',
      id: 'Id',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      error: 'string',
      id: 'number',
      requestId: 'string',
      response: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizTypeList)) {
      $dara.Model.validateArray(this.bizTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

