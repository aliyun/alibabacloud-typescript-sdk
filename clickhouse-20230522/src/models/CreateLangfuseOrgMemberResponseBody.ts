// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLangfuseOrgMemberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * john@company.com
   */
  email?: string;
  /**
   * @remarks
   * The role of the user in the organization.
   * 
   * @example
   * VIEWER
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLangfuseOrgMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the user added to the Langfuse organization.
   */
  data?: CreateLangfuseOrgMemberResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateLangfuseOrgMemberResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

