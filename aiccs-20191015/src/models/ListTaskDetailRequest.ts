// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The callee number. You can view the callee number on the **Detail** interface of [**Task Management**](https://aiccs.console.aliyun.com/job/list).
   * 
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @remarks
   * The detail ID. You can view the detail ID on the **Detail** interface of [**Task Management**](https://aiccs.console.aliyun.com/job/list).
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
   * Detail status. Valid values:
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
   * The call status code. For more information, see [Call Status Codes](https://help.aliyun.com/document_detail/112804.html) in Voice Service.
   * 
   * @example
   * 200100
   */
  statusCode?: string;
  /**
   * @remarks
   * The job ID. You can view the job ID on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or obtain it by using the [ListTask](https://help.aliyun.com/document_detail/2718008.html) API.
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

