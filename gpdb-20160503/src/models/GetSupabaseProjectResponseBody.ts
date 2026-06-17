// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the **auto pause and resume** feature is enabled.
   * Valid values:
   * 
   * - `true`: The feature is enabled. The project automatically pauses and resumes based on traffic.
   * 
   * - `false`: The feature is disabled.
   * 
   * @example
   * false
   */
  autoScale?: string;
  /**
   * @remarks
   * The creation time of the project.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The database IP address whitelist, specified as a comma-separated string.
   * 
   * @example
   * 127.0.0.1,100.64.XX.XX/10
   */
  DBSecurityIpList?: string;
  /**
   * @remarks
   * The password for the Supabase Dashboard. This parameter is not used.
   * 
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The username for the Supabase Dashboard. This parameter is not used.
   * 
   * @example
   * username
   */
  dashboardUserName?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. Valid values:
   * 
   * - PL0
   * 
   * - PL1
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * postgres
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 15
   */
  engineVersion?: string;
  /**
   * @remarks
   * The elastic network interface (ENI) ID.
   * 
   * @example
   * eni-xxxxxx
   */
  eni?: string;
  /**
   * @remarks
   * The current instance version.
   * 
   * @example
   * v1.0.3
   */
  instanceVersion?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `POSTPAY`: pay-as-you-go
   * 
   * - `PREPAY`: subscription
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The private connection URL for the Supabase Dashboard.
   * 
   * @example
   * 192.168.0.11
   */
  privateConnectUrl?: string;
  /**
   * @remarks
   * The description of the Supabase project.
   * 
   * @example
   * for-test-project
   */
  projectDescription?: string;
  /**
   * @remarks
   * The Supabase project ID.
   * 
   * @example
   * sbp-545434
   */
  projectId?: string;
  /**
   * @remarks
   * The Supabase project name.
   * 
   * @example
   * supabase_project
   */
  projectName?: string;
  /**
   * @remarks
   * The Supabase instance specification.
   * 
   * @example
   * 1C1G
   */
  projectSpec?: string;
  /**
   * @remarks
   * The public connection URL for the Supabase Dashboard.
   * 
   * @example
   * 10.154.11.10
   */
  publicConnectUrl?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address whitelist, specified as a comma-separated string.
   * 
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @remarks
   * The Supabase instance status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage space, in GB.
   * 
   * @example
   * 2
   */
  storageSize?: number;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - **cloud_essd_pl0**
   * 
   * - **cloud_essd_pl1**
   * 
   * - **cloud_essd_pl2**
   * 
   * - **cloud_essd_pl3**
   * 
   * @example
   * cloud_essd_pl0
   */
  storageType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > - You can call the [DescribeRdsVpcs](https://help.aliyun.com/document_detail/208327.html) operation to query the available VPCs.
   * >
   * > - This parameter is required.
   * 
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the available zones.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      createTime: 'CreateTime',
      DBSecurityIpList: 'DBSecurityIpList',
      dashboardPassword: 'DashboardPassword',
      dashboardUserName: 'DashboardUserName',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      eni: 'Eni',
      instanceVersion: 'InstanceVersion',
      payType: 'PayType',
      privateConnectUrl: 'PrivateConnectUrl',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      publicConnectUrl: 'PublicConnectUrl',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
      status: 'Status',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'string',
      createTime: 'string',
      DBSecurityIpList: 'string',
      dashboardPassword: 'string',
      dashboardUserName: 'string',
      diskPerformanceLevel: 'string',
      engine: 'string',
      engineVersion: 'string',
      eni: 'string',
      instanceVersion: 'string',
      payType: 'string',
      privateConnectUrl: 'string',
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectSpec: 'string',
      publicConnectUrl: 'string',
      regionId: 'string',
      requestId: 'string',
      securityIpList: 'string',
      status: 'string',
      storageSize: 'number',
      storageType: 'string',
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

