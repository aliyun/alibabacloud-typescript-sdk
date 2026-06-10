// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublishTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of business types.
   */
  bizTypeList?: string[];
  /**
   * @remarks
   * The time when the task was created, in UTC.
   * 
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message if the task fails.
   * 
   * @example
   * 检查待发布模块是否空闲发生错误，faq
   */
  error?: string;
  /**
   * @remarks
   * The publish task ID.
   * 
   * @example
   * 8522
   */
  id?: number;
  /**
   * @remarks
   * The time when the task was last modified, in UTC.
   * 
   * @example
   * 2022-04-12T06:30:33Z
   */
  modifyTime?: string;
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
   * The publish task ID. This parameter is redundant. Use the `Id` parameter instead.
   * 
   * @example
   * 8522
   */
  response?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * `FE_RUNNING`: Publishing<br><br>`FE_SUCCESS`: Published<br><br>`FE_FAILED`: Failed<br><br>`FE_ABORTED`: Canceled<br><br><br><br><br><br>
   * 
   * @example
   * FE_RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      error: 'string',
      id: 'number',
      modifyTime: 'string',
      requestId: 'string',
      response: 'string',
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

