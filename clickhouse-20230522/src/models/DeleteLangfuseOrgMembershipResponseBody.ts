// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLangfuseOrgMembershipResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * john@company.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLangfuseOrgMembershipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response result.
   */
  data?: DeleteLangfuseOrgMembershipResponseBodyData;
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
      data: DeleteLangfuseOrgMembershipResponseBodyData,
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

