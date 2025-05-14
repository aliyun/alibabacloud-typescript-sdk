// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  concurrentRate?: number;
  /**
   * @example
   * 1615083365000
   */
  createTime?: number;
  description?: string;
  /**
   * @example
   * 70
   */
  finishCount?: number;
  /**
   * @example
   * 0.7
   */
  finishRate?: number;
  /**
   * @example
   * 2468****
   */
  handlerId?: number;
  /**
   * @example
   * 热线技能组
   */
  handlerName?: string;
  /**
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 未开始
   */
  statusDesc?: string;
  /**
   * @example
   * 1763****
   */
  taskId?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      createTime: 'CreateTime',
      description: 'Description',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      createTime: 'number',
      description: 'string',
      finishCount: 'number',
      finishRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

