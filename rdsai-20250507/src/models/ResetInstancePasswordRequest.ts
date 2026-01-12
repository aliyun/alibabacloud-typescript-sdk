// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetInstancePasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * test_Password
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The Supabase Dashboard password.
   * 
   * The password must be 8 to 32 characters in length and must contain at least three of the following types: uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * @example
   * test_Password
   */
  databasePassword?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **ResetInstancePassword**.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardPassword: 'DashboardPassword',
      databasePassword: 'DatabasePassword',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardPassword: 'string',
      databasePassword: 'string',
      instanceName: 'string',
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

