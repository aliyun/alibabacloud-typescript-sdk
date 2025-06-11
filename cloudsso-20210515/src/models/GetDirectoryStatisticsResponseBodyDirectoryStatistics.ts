// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryStatisticsResponseBodyDirectoryStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of access permissions that are assigned.
   * 
   * @example
   * 5
   */
  accessAssignmentCount?: number;
  /**
   * @remarks
   * The number of access configurations.
   * 
   * @example
   * 6
   */
  accessConfigurationCount?: number;
  /**
   * @remarks
   * The quota for access configurations.
   * 
   * @example
   * 1000
   */
  accessConfigurationQuota?: number;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * new-example
   */
  directoryName?: string;
  /**
   * @remarks
   * The number of user groups.
   * 
   * @example
   * 4
   */
  groupCount?: number;
  /**
   * @remarks
   * The quota for user groups.
   * 
   * @example
   * 500
   */
  groupQuota?: number;
  /**
   * @remarks
   * The number of tasks that are being performed.
   * 
   * @example
   * 0
   */
  inProgressTaskCount?: number;
  /**
   * @remarks
   * The number of inline policies that can be configured for an access configuration.
   * 
   * @example
   * 1
   */
  inlinePolicyPerAccessConfigurationQuota?: number;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The number of SCIM credentials.
   * 
   * @example
   * 2
   */
  SCIMServerCredentialCount?: number;
  /**
   * @remarks
   * Indicates whether SCIM synchronization is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  SCIMSyncEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether SSO is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  SSOEnabled?: boolean;
  /**
   * @remarks
   * The quota for system policies that can be configured for an access configuration.
   * 
   * @example
   * 20
   */
  systemPolicyPerAccessConfigurationQuota?: number;
  /**
   * @remarks
   * The number of users.
   * 
   * @example
   * 16
   */
  userCount?: number;
  /**
   * @remarks
   * The quota for users.
   * 
   * @example
   * 1000
   */
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      accessAssignmentCount: 'AccessAssignmentCount',
      accessConfigurationCount: 'AccessConfigurationCount',
      accessConfigurationQuota: 'AccessConfigurationQuota',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      groupCount: 'GroupCount',
      groupQuota: 'GroupQuota',
      inProgressTaskCount: 'InProgressTaskCount',
      inlinePolicyPerAccessConfigurationQuota: 'InlinePolicyPerAccessConfigurationQuota',
      region: 'Region',
      SCIMServerCredentialCount: 'SCIMServerCredentialCount',
      SCIMSyncEnabled: 'SCIMSyncEnabled',
      SSOEnabled: 'SSOEnabled',
      systemPolicyPerAccessConfigurationQuota: 'SystemPolicyPerAccessConfigurationQuota',
      userCount: 'UserCount',
      userQuota: 'UserQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAssignmentCount: 'number',
      accessConfigurationCount: 'number',
      accessConfigurationQuota: 'number',
      directoryId: 'string',
      directoryName: 'string',
      groupCount: 'number',
      groupQuota: 'number',
      inProgressTaskCount: 'number',
      inlinePolicyPerAccessConfigurationQuota: 'number',
      region: 'string',
      SCIMServerCredentialCount: 'number',
      SCIMSyncEnabled: 'boolean',
      SSOEnabled: 'boolean',
      systemPolicyPerAccessConfigurationQuota: 'number',
      userCount: 'number',
      userQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

