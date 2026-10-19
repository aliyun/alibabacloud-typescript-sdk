// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunNodeAIResponseBody extends $dara.Model {
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
   * 物理实例ID
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
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
   * 已安排重跑的节点 key
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
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
   * 重跑事实接受为 true，不表示 AI 已完成；失败通过 Code 和 Message 返回
   * 
   * @example
   * true
   */
  rerunAccepted?: boolean;
  /**
   * @remarks
   * 状态版本
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
      nodeId: 'nodeId',
      requestId: 'requestId',
      rerunAccepted: 'rerunAccepted',
      stateVersion: 'stateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      nodeId: 'string',
      requestId: 'string',
      rerunAccepted: 'boolean',
      stateVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

