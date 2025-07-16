// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteUsersRequestInviteeList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试用户
   */
  nick?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteUsersRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteUsersRequestPhoneInviteeList extends $dara.Model {
  inviteClient?: boolean;
  nick?: string;
  phoneNumber?: string;
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      inviteClient: 'InviteClient',
      nick: 'Nick',
      phoneNumber: 'PhoneNumber',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteClient: 'boolean',
      nick: 'string',
      phoneNumber: 'string',
      statusCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteUsersRequest extends $dara.Model {
  inviteeList?: InviteUsersRequestInviteeList[];
  tenantContext?: InviteUsersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  phoneInviteeList?: InviteUsersRequestPhoneInviteeList[];
  static names(): { [key: string]: string } {
    return {
      inviteeList: 'InviteeList',
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
      phoneInviteeList: 'phoneInviteeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteeList: { 'type': 'array', 'itemType': InviteUsersRequestInviteeList },
      tenantContext: InviteUsersRequestTenantContext,
      conferenceId: 'string',
      phoneInviteeList: { 'type': 'array', 'itemType': InviteUsersRequestPhoneInviteeList },
    };
  }

  validate() {
    if(Array.isArray(this.inviteeList)) {
      $dara.Model.validateArray(this.inviteeList);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.phoneInviteeList)) {
      $dara.Model.validateArray(this.phoneInviteeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

