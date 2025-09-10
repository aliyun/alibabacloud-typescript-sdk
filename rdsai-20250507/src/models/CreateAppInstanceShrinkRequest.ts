// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceShrinkRequest extends $dara.Model {
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
  DBInstanceConfigShrink?: string;
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
  /**
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
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
      DBInstanceConfigShrink: 'DBInstanceConfig',
      DBInstanceName: 'DBInstanceName',
      dashboardPassword: 'DashboardPassword',
      dashboardUsername: 'DashboardUsername',
      databasePassword: 'DatabasePassword',
      instanceClass: 'InstanceClass',
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
      instanceClass: 'string',
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

