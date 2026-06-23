// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRoleRequestModulePermissions extends $dara.Model {
  /**
   * @remarks
   * The DataWorks module ID. Valid values:
   * 
   * - 2: HoloStudio
   * 
   * - 3: StreamStudio
   * 
   * - 4: Deployment Center
   * 
   * - 6: Data Security Guard
   * 
   * - 7: Data Map
   * 
   * - 8: Data Service
   * 
   * - 9: Data Integration
   * 
   * - 10: Data Modeling (DataBlau DDM)
   * 
   * - 11: Data Studio
   * 
   * - 12: Data Quality
   * 
   * - 13: Data Governance
   * 
   * - 14: Operation Center
   * 
   * - 15: Resource Optimization
   * 
   * - 16: Migration Assistant
   * 
   * - 17: Data Analysis
   * 
   * - 18: Approval Center
   * 
   * - 19: Security Center
   * 
   * - 20: Intelligent Data Modeling
   * 
   * @example
   * 2
   */
  moduleId?: number;
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - Write: Read-only
   * 
   * - Read: Edit
   * 
   * - NotSet: Not controlled
   * 
   * @example
   * Write
   */
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'number',
      permissionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRoleRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the custom role.
   * 
   * This parameter is required.
   * 
   * @example
   * base_role_xx
   */
  code?: string;
  /**
   * @remarks
   * The list of DataWorks module permissions.
   * 
   * This parameter is required.
   */
  modulePermissions?: UpdateProjectRoleRequestModulePermissions[];
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace on which the API operation is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      modulePermissions: 'ModulePermissions',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      modulePermissions: { 'type': 'array', 'itemType': UpdateProjectRoleRequestModulePermissions },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modulePermissions)) {
      $dara.Model.validateArray(this.modulePermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

