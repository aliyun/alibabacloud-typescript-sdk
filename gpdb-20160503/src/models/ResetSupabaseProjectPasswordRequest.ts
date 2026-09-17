// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSupabaseProjectPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the database account.
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - The supported special characters are: `!@#$%^&*()_+-=`
   * - The password must be 8 to 32 characters in length.
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The Supabase Dashboard password.
   * 
   * @example
   * zaQBjed6d4ubV4o
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The Supabase instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-tyarplz****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      dashboardPassword: 'DashboardPassword',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      dashboardPassword: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

