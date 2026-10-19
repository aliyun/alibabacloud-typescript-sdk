// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseWorkflowTodosResponseBody extends $dara.Model {
  /**
   * @remarks
   * 关闭条数（幂等重复调用为 0）
   * 
   * @example
   * 3
   */
  cancelledCount?: number;
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
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 工作流 ID（原样回显）
   * 
   * @example
   * wf-1
   */
  sourceWorkflowId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelledCount: 'cancelledCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      sourceWorkflowId: 'sourceWorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledCount: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
      sourceWorkflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

