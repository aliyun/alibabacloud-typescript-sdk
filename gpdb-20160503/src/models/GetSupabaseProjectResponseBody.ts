// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @example
   * username
   */
  dashboardUserName?: string;
  /**
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @example
   * postgres
   */
  engine?: string;
  /**
   * @example
   * 15
   */
  engineVersion?: string;
  /**
   * @example
   * 192.168.0.11
   */
  privateConnectUrl?: string;
  /**
   * @example
   * sbp-545434
   */
  projectId?: string;
  /**
   * @example
   * supabase_project
   */
  projectName?: string;
  /**
   * @example
   * 1C1G
   */
  projectSpec?: string;
  /**
   * @example
   * 10.154.11.10
   */
  publicConnectUrl?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 2
   */
  storageSize?: number;
  /**
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dashboardPassword: 'DashboardPassword',
      dashboardUserName: 'DashboardUserName',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      privateConnectUrl: 'PrivateConnectUrl',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      publicConnectUrl: 'PublicConnectUrl',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
      status: 'Status',
      storageSize: 'StorageSize',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dashboardPassword: 'string',
      dashboardUserName: 'string',
      diskPerformanceLevel: 'string',
      engine: 'string',
      engineVersion: 'string',
      privateConnectUrl: 'string',
      projectId: 'string',
      projectName: 'string',
      projectSpec: 'string',
      publicConnectUrl: 'string',
      regionId: 'string',
      requestId: 'string',
      securityIpList: 'string',
      status: 'string',
      storageSize: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

