// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkspacePermissionItem } from "./WorkspacePermissionItem";


export class WorkspacePermissionEvaluateResult extends $dara.Model {
  /**
   * @remarks
   * 各 action 的校验结果；顺序与请求 actions 一致
   */
  permissions?: WorkspacePermissionItem[];
  /**
   * @remarks
   * 当前租户下是否解析到该 workspace；为 false 时各 permissions 一般为 allowed: false，不会调用 RAM
   */
  workspaceFound?: boolean;
  /**
   * @remarks
   * 回显请求中的 workspace ID（trim 后）
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
      workspaceFound: 'workspaceFound',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': WorkspacePermissionItem },
      workspaceFound: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

