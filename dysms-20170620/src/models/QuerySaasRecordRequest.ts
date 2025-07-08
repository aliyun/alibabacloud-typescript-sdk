// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySaasRecordRequest extends $dara.Model {
  bizType?: string;
  indexCol?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  result?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      indexCol: 'IndexCol',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      result: 'Result',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      indexCol: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      result: 'number',
      taskId: 'number',
      taskInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

