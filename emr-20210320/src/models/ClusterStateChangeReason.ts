// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClusterStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * 状态码。取值范围：
   * - UserRequest：用户请求。
   * - OutOfStock：请求的ECS实例类型无库存。
   * - NotAuthorized：无权限。
   * - QuotaExceeded：Quota超出。
   * - OperationDenied：操作被拒绝。
   * - AccountException：账号异常。
   * - NodeFailure：ECS节点异常。
   * - BootstrapFailure：引导失败。
   * - ValidationFail：业务逻辑校验失败。
   * - ServiceFailure：依赖的其他服务失败。
   * - InternalError：内部错误。
   * 
   * @example
   * OutOfStock
   */
  code?: string;
  /**
   * @remarks
   * 状态变化信息。
   * 
   * @example
   * The requested resource is sold out in the specified zone, try other types of resources or other regions and zones.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

