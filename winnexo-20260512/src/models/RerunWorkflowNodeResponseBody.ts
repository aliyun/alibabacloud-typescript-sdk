// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * 本次重跑影响的节点 key 列表，供调用方刷新；成功响应恒包含，错误响应可缺省
   * 
   * @example
   * ["query.amount"]
   */
  affectedNodeKeys?: string[];
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
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 重跑后的当前物理计划ID；固定规划节点重跑可能生成新计划，后续查询应使用此值
   * 
   * @example
   * plan_new
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
   * 重跑后的当前计划修订号
   * 
   * @example
   * 2
   */
  revision?: number;
  /**
   * @remarks
   * 当前工作流运行ID，固定节点生成新 revision 时保持不变
   * 
   * @example
   * run_20261105_01
   */
  runId?: string;
  /**
   * @remarks
   * 重跑被接受后的工作流状态版本
   * 
   * @example
   * 8
   */
  stateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      affectedNodeKeys: 'affectedNodeKeys',
      code: 'code',
      message: 'message',
      planId: 'planId',
      requestId: 'requestId',
      revision: 'revision',
      runId: 'runId',
      stateVersion: 'stateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedNodeKeys: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      revision: 'number',
      runId: 'string',
      stateVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.affectedNodeKeys)) {
      $dara.Model.validateArray(this.affectedNodeKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

