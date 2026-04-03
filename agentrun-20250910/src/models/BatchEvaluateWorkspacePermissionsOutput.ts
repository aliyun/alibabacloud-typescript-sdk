// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkspacePermissionEvaluateResult } from "./WorkspacePermissionEvaluateResult";


export class BatchEvaluateWorkspacePermissionsOutput extends $dara.Model {
  /**
   * @remarks
   * 各 workspace 的权限校验结果列表；顺序与请求 workspaceIds 一致
   */
  results?: WorkspacePermissionEvaluateResult[];
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': WorkspacePermissionEvaluateResult },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

