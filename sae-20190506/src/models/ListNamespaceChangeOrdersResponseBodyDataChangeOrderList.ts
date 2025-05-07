// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersResponseBodyDataChangeOrderList extends $dara.Model {
  /**
   * @remarks
   * The number of release batches.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The mode in which the release batches are determined. Valid values:
   * 
   * *   **auto**: SAE automatically determines the release batches.
   * *   **manual**: You must manually determine the release batches.
   */
  batchType?: string;
  /**
   * @remarks
   * The ID of the change order.
   * 
   * @example
   * 7fa5c0-9ebb-4bb4-b383-1f885447****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The type of the change order, which corresponds the **CoTypeCode** parameter.
   * 
   * @example
   * msg.docker.app.actions.CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change order type. Valid values:
   * 
   * *   **CoBatchStartApplication**: starts multiple applications concurrently.
   * *   **CoBatchStopApplication**: stops multiple applications concurrently.
   * 
   * @example
   * CoBatchStartApplication
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The time when the change order was created.
   * 
   * @example
   * 2019-07-11 15:54:49
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the change order.
   * 
   * @example
   * test@aliyun.com
   */
  createUserId?: string;
  /**
   * @remarks
   * The description of the change order.
   */
  description?: string;
  /**
   * @remarks
   * The time when the change order was completed.
   * 
   * @example
   * 2019-07-11 20:12:58
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * c9ecd2-cf6c-46c3-9f20-525de202****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-shanghai:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The information about release batches.
   * 
   * @example
   * xxxx
   */
  pipelines?: string;
  /**
   * @remarks
   * The source of the change order.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * *   **0**: The change order is being prepared.
   * *   **1**: The change order is being executed.
   * *   **2**: The change order was executed.
   * *   **3**: The change order could not be executed.
   * *   **6**: The change order was terminated.
   * *   **10**: The change order could not be executed due to a system exception.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * test_sae
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      description: 'Description',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      namespaceId: 'NamespaceId',
      pipelines: 'Pipelines',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      batchType: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      description: 'string',
      finishTime: 'string',
      groupId: 'string',
      namespaceId: 'string',
      pipelines: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

