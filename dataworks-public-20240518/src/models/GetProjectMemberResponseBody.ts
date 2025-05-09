// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectMemberResponseBodyProjectMember } from "./GetProjectMemberResponseBodyProjectMember";


export class GetProjectMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the member in the workspace.
   */
  projectMember?: GetProjectMemberResponseBodyProjectMember;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectMember: 'ProjectMember',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectMember: GetProjectMemberResponseBodyProjectMember,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectMember && typeof (this.projectMember as any).validate === 'function') {
      (this.projectMember as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

