// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccessDeniedDetail } from "./AccessDeniedDetail";


export class WorkspacePermissionItem extends $dara.Model {
  /**
   * @remarks
   * RAM 明确拒绝且可构造 detail 时返回；通过或非 RAM 拒绝场景省略
   * 
   * **if can be null:**
   * true
   */
  accessDeniedDetail?: AccessDeniedDetail;
  /**
   * @remarks
   * 归一化后的 RAM action，始终含 agentrun: 前缀，如 agentrun:ListTemplates
   */
  action?: string;
  /**
   * @remarks
   * RAM 判定通过为 true；workspace 不存在、非法/不支持 action、RAM SDK 报错等均为 false
   */
  allowed?: boolean;
  /**
   * @remarks
   * 人类可读原因；通过时通常为空字符串
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      action: 'action',
      allowed: 'allowed',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: AccessDeniedDetail,
      action: 'string',
      allowed: 'boolean',
      message: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

