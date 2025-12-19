// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceRequestDBInstanceConfig extends $dara.Model {
  /**
   * @example
   * pg.n2.2c.1m
   */
  DBInstanceClass?: string;
  /**
   * @example
   * 100
   */
  DBInstanceStorage?: number;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      payType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceRequest extends $dara.Model {
  /**
   * @example
   * test-supabase
   */
  appName?: string;
  /**
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  DBInstanceConfig?: CreateAppInstanceRequestDBInstanceConfig;
  /**
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  /**
   * @example
   * test_Password
   */
  dashboardPassword?: string;
  /**
   * @example
   * supabase
   */
  dashboardUsername?: string;
  /**
   * @example
   * test_Password
   */
  databasePassword?: string;
  initializeWithExistingData?: boolean;
  /**
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
  publicEndpointEnabled?: boolean;
  /**
   * @example
   * false
   */
  publicNetworkAccessEnabled?: boolean;
  RAGEnabled?: boolean;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * vsw-9dp2hkpm22gxscfgy****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      clientToken: 'ClientToken',
      DBInstanceConfig: 'DBInstanceConfig',
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
      DBInstanceConfig: CreateAppInstanceRequestDBInstanceConfig,
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
    if(this.DBInstanceConfig && typeof (this.DBInstanceConfig as any).validate === 'function') {
      (this.DBInstanceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

