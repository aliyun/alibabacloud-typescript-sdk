// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The called number. You can view the called number on the [**Task Management**](https://aiccs.console.aliyun.com/job/list) > **Details** page.
   * 
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @remarks
   * The detail ID. You can view the detail ID on the [**Task Management**](https://aiccs.console.aliyun.com/job/list) > **Details** page.
   * 
   * @example
   * 12****
   */
  id?: number;
  ownerId?: number;
  /**
   * @remarks
   * The current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The detail status. Valid values:
   * 
   * - **SUCCESS**: The outbound call succeeded.
   * - **FAIL**: The outbound call failed.
   * - **INIT**: The outbound call has not been made.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The call status code. For more information, see [Call status codes](https://help.aliyun.com/document_detail/112804.html) in Voice Messaging.
   * 
   * @example
   * 200100
   */
  statusCode?: string;
  /**
   * @remarks
   * The task ID. You can view the task ID on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or obtain it by calling the [ListTask](https://help.aliyun.com/document_detail/2718008.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      id: 'Id',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      id: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      statusCode: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

