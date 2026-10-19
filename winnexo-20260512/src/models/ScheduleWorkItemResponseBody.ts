// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleWorkItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 本次是否新创建 Plan
   * 
   * @example
   * false
   */
  created?: boolean;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 物理计划ID
   * 
   * @example
   * example
   */
  planId?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 修订号
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * 运行ID
   * 
   * @example
   * example
   */
  runId?: string;
  /**
   * @remarks
   * 运行序号
   * 
   * @example
   * 1
   */
  runSeq?: number;
  /**
   * @remarks
   * 工作项ID
   * 
   * @example
   * example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      created: 'created',
      message: 'message',
      planId: 'planId',
      requestId: 'requestId',
      revision: 'revision',
      runId: 'runId',
      runSeq: 'runSeq',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      created: 'boolean',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      revision: 'number',
      runId: 'string',
      runSeq: 'number',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

