// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenPlanOrgInviteConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default organization role ID to assign. Valid values:
   * 
   * - SYSTEM_ROLE_ORG_ADMIN
   * - SYSTEM_ROLE_ORG_MEMBER
   * 
   * @example
   * ORG_MEMBER
   */
  defaultRoleId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org_123456789
   */
  orgId?: string;
  /**
   * @remarks
   * The default seat allocation strategy. Valid values:
   * 
   * - HIGH_TO_LOW
   * - LOW_TO_HIGH 
   * - NONE
   * 
   * @example
   * NONE
   */
  seatAssignStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoleId: 'DefaultRoleId',
      orgId: 'OrgId',
      seatAssignStrategy: 'SeatAssignStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoleId: 'string',
      orgId: 'string',
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

export class GetTokenPlanOrgInviteConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data result of the current category statistics.
   */
  data?: GetTokenPlanOrgInviteConfigResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTokenPlanOrgInviteConfigResponseBodyData,
      message: 'string',
      success: 'boolean',
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

