// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcubeHotpatchTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hotpatch
   */
  bizType?: string;
  /**
   * @example
   * 1692835
   */
  packageId?: number;
  /**
   * @example
   * 69536
   */
  taskId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BUILDING
   */
  taskStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZXCXMAHQ
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
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

