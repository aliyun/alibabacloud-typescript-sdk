// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS for PostgreSQL instance with which the RDS Supabase instances are associated.
   * 
   * > : Only newly purchased empty RDS for PostgreSQL instances are supported. The major engine version must be PostgreSQL 17 and the minor version must be 20250630 or later.
   * 
   * @example
   * test-supabase
   */
  appName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * The name of the new AI application.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  DBInstanceConfigShrink?: string;
  /**
   * @remarks
   * The instance type. Only **rdsai.supabase.basic** is supported.
   * 
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The Supabase Dashboard user name.
   * 
   * @example
   * test_Password
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The password used to access the RDS database.
   * 
   * The password must be 8 to 32 characters in length and must contain at least three of the following characters: uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * @example
   * supabase
   */
  dashboardUsername?: string;
  /**
   * @remarks
   * The idempotency token. The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * @example
   * test_Password
   */
  databasePassword?: string;
  /**
   * @remarks
   * Specifies whether to enable public endpoint.
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * false
   */
  initializeWithExistingData?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
  /**
   * @remarks
   * The billing method of the RDS for PostgreSQL instance.
   * 
   * @example
   * true
   */
  publicEndpointEnabled?: boolean;
  /**
   * @remarks
   * The Supabase Dashboard password.
   * 
   * The password must be 8 to 32 characters in length and must contain at least three of the following characters: uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * @example
   * false
   */
  publicNetworkAccessEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Internet NAT gateway. Valid values:
   * 
   * *   **true**: enable the Internet NAT gateway.
   * *   **false** (default): disable the Internet NAT gateway.
   * 
   * >  If an Internet NAT gateway is enabled for the vSwitch that you specify for VSwitchId, select false for this parameter.
   * 
   * @example
   * false
   */
  RAGEnabled?: boolean;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **CreateAppInstance**.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The application type. Only **supabase** is supported.
   * 
   * @example
   * vsw-9dp2hkpm22gxscfgy****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      clientToken: 'ClientToken',
      DBInstanceConfigShrink: 'DBInstanceConfig',
      DBInstanceName: 'DBInstanceName',
      dashboardPassword: 'DashboardPassword',
      dashboardUsername: 'DashboardUsername',
      databasePassword: 'DatabasePassword',
      initializeWithExistingData: 'InitializeWithExistingData',
      instanceClass: 'InstanceClass',
      publicEndpointEnabled: 'PublicEndpointEnabled',
      publicNetworkAccessEnabled: 'PublicNetworkAccessEnabled',
      RAGEnabled: 'RAGEnabled',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      clientToken: 'string',
      DBInstanceConfigShrink: 'string',
      DBInstanceName: 'string',
      dashboardPassword: 'string',
      dashboardUsername: 'string',
      databasePassword: 'string',
      initializeWithExistingData: 'boolean',
      instanceClass: 'string',
      publicEndpointEnabled: 'boolean',
      publicNetworkAccessEnabled: 'boolean',
      RAGEnabled: 'boolean',
      regionId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

