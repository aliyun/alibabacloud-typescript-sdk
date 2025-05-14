// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteUsersShrinkRequest extends $dara.Model {
  inviteeListShrink?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  phoneInviteeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      inviteeListShrink: 'InviteeList',
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
      phoneInviteeListShrink: 'phoneInviteeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteeListShrink: 'string',
      tenantContextShrink: 'string',
      conferenceId: 'string',
      phoneInviteeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

