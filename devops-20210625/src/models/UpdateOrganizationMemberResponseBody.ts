// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationMemberResponseBodyMember extends $dara.Model {
  /**
   * @example
   * 292035769476261xxx
   */
  accountId?: string;
  organizationMemberName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      organizationMemberName: 'organizationMemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      organizationMemberName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationMemberResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  member?: UpdateOrganizationMemberResponseBodyMember;
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      member: 'member',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      member: UpdateOrganizationMemberResponseBodyMember,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

