// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InviteUsersRequestInviteeList } from "./InviteUsersRequestInviteeList";
import { InviteUsersRequestTenantContext } from "./InviteUsersRequestTenantContext";
import { InviteUsersRequestPhoneInviteeList } from "./InviteUsersRequestPhoneInviteeList";


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

