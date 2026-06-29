// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTokenPlanOrgInviteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the organization role assigned by default. Valid values:
   * 
   * - SYSTEM_ROLE_ORG_ADMIN
   * - SYSTEM_ROLE_ORG_MEMBER
   * 
   * This parameter is required.
   * 
   * @example
   * ORG_MEMBER
   */
  defaultRoleId?: string;
  /**
   * @remarks
   * The default seat allocation policy. Valid values:
   * 
   * - HIGH_TO_LOW
   * - LOW_TO_HIGH
   * - NONE
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  seatAssignStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoleId: 'DefaultRoleId',
      seatAssignStrategy: 'SeatAssignStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoleId: 'string',
      seatAssignStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

