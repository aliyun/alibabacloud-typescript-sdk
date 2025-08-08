// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMcubeMiniTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  packageId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizType: 'BizType',
      packageId: 'PackageId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizType: 'string',
      packageId: 'number',
      taskId: 'number',
      taskStatus: 'number',
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

