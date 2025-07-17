// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRoleResponseBodyProjectRole extends $dara.Model {
  /**
   * @remarks
   * The code of the role in the DataWorks workspace.
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The name of the role in the DataWorks workspace.
   * 
   * @example
   * Visitors
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the role in the DataWorks workspace. Valid values:
   * 
   * *   UserCustom: user-defined role
   * *   System: system role
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The role in the DataWorks workspace.
   */
  projectRole?: GetProjectRoleResponseBodyProjectRole;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82F28E60-CF48-5EDF-AB25-D806847B97D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectRole: 'ProjectRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRole: GetProjectRoleResponseBodyProjectRole,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectRole && typeof (this.projectRole as any).validate === 'function') {
      (this.projectRole as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

