// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLangfuseUserAllowOrgCreationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user is allowed to create organizations.
   * 
   * @example
   * false
   */
  allowOrgCreation?: boolean;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * alice@company.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      allowOrgCreation: 'AllowOrgCreation',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOrgCreation: 'boolean',
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

export class ModifyLangfuseUserAllowOrgCreationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ModifyLangfuseUserAllowOrgCreationResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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
      data: ModifyLangfuseUserAllowOrgCreationResponseBodyData,
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

