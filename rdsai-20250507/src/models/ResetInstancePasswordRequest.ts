// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetInstancePasswordRequest extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The Supabase Dashboard password.
   * 
   * The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * @example
   * test_Password
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The RDS database access password.
   * 
   * The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * >Notice: This password change also updates the access passwords of the following accounts on the associated PostgreSQL instance. These accounts are required by Supabase: postgres, supabase_admin, supabase_auth_admin, supabase_functions_admin, supabase_storage_admin, authenticator, pgbouncer.
   * </notice>
   * 
   * @example
   * test_Password
   */
  databasePassword?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      dashboardPassword: 'DashboardPassword',
      databasePassword: 'DatabasePassword',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
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

