// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectRoleResponseBodyProjectRole } from "./GetProjectRoleResponseBodyProjectRole";


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

