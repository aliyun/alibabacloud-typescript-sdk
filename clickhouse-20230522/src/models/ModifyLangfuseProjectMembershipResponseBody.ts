// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLangfuseProjectMembershipResponseBodyData extends $dara.Model {
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
   * The role of the user in the project.
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

export class ModifyLangfuseProjectMembershipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyLangfuseProjectMembershipResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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
      data: ModifyLangfuseProjectMembershipResponseBodyData,
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

