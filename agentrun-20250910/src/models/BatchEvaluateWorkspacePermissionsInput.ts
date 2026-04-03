// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEvaluateWorkspacePermissionsInput extends $dara.Model {
  /**
   * @remarks
   * RAM List 类 action 列表；支持带 agentrun: 前缀或不带（服务端归一化）；顺序与每条 permissions 一致；上限 20 条
   * 
   * This parameter is required.
   */
  actions?: string[];
  /**
   * @remarks
   * Workspace 资源 ID 列表（UUID 字符串）；顺序与响应 results 一致；上限 50 条
   * 
   * This parameter is required.
   */
  workspaceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      workspaceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.workspaceIds)) {
      $dara.Model.validateArray(this.workspaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

