// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetailsRequest extends $dara.Model {
  /**
   * @remarks
   * 批次id
   * 
   * @example
   * 75
   */
  batchId?: number;
  /**
   * @remarks
   * 结束导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  endTime?: string;
  /**
   * @remarks
   * 号码状态
   * 
   * @example
   * 1
   */
  numberStatus?: number;
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * @example
   * 77
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 开始导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  startTime?: string;
  /**
   * @remarks
   * 任务id
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      endTime: 'EndTime',
      numberStatus: 'NumberStatus',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      endTime: 'string',
      numberStatus: 'number',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

