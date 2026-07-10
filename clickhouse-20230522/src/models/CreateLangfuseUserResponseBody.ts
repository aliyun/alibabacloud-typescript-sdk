// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLangfuseUserResponseBodyDataMembership extends $dara.Model {
  /**
   * @remarks
   * The Langfuse organization ID.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
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
      organizationId: 'OrganizationId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
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

export class CreateLangfuseUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2026-03-04T10:20:33Z
   */
  createdAt?: string;
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
   * The role of the user.
   */
  membership?: CreateLangfuseUserResponseBodyDataMembership;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * john
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      email: 'Email',
      membership: 'Membership',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      email: 'string',
      membership: CreateLangfuseUserResponseBodyDataMembership,
      name: 'string',
    };
  }

  validate() {
    if(this.membership && typeof (this.membership as any).validate === 'function') {
      (this.membership as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLangfuseUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: CreateLangfuseUserResponseBodyData;
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
      data: CreateLangfuseUserResponseBodyData,
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

