// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateInstanceResponseBody extends $dara.Model {
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
   * 终止后状态
   * 
   * @example
   * Terminated
   */
  instanceStatus?: string;
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
   * 状态版本
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  /**
   * @remarks
   * 终止成功为 true；失败通过 Code 和 Message 返回
   * 
   * @example
   * true
   */
  terminated?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      instanceStatus: 'instanceStatus',
      message: 'message',
      requestId: 'requestId',
      stateVersion: 'stateVersion',
      terminated: 'terminated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      message: 'string',
      requestId: 'string',
      stateVersion: 'number',
      terminated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

