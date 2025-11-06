// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMdsCubeTaskStatusRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 1
   */
  templateResourceId?: number;
  /**
   * @example
   * 1
   */
  templateTaskId?: number;
  /**
   * @example
   * ZXCXMAHQ-zh_CN
   */
  tenantId?: string;
  /**
   * @example
   * dev
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskStatus: 'TaskStatus',
      templateResourceId: 'TemplateResourceId',
      templateTaskId: 'TemplateTaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskStatus: 'number',
      templateResourceId: 'number',
      templateTaskId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

