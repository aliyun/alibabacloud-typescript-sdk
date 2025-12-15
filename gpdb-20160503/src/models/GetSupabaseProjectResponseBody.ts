// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Supabase Dashboard password (Not Used)
   * 
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The Supabase Dashboard user name (Not Used)
   * 
   * @example
   * username
   */
  dashboardUserName?: string;
  /**
   * @remarks
   * The Enterprise SSD (ESSD) performance level of the cluster. Valid values:
   * 
   * *   PL0
   * *   PL1
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * postgres
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 15
   */
  engineVersion?: string;
  eni?: string;
  instanceVersion?: string;
  payType?: string;
  /**
   * @remarks
   * The private (VPC) connection URL for the Supabase Dashboard.
   * 
   * @example
   * 192.168.0.11
   */
  privateConnectUrl?: string;
  /**
   * @remarks
   * The Supabase instance ID.
   * 
   * @example
   * sbp-545434
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the Supabase project.
   * 
   * @example
   * supabase_project
   */
  projectName?: string;
  /**
   * @remarks
   * The performance level of the Supabase instance.
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
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
   * @remarks
   * A comma-separated list of IP addresses and CIDR blocks allowed to connect.
   * 
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @remarks
   * The status of the Supabase instance.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 2
   */
  storageSize?: number;
  storageType?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance. This parameter must be specified when VPCId is specified.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > 
   * 
   * *   You can call the [DescribeRdsVpcs](https://help.aliyun.com/document_detail/208327.html) operation to query the available VPC IDs.
   * 
   * *   This parameter is required.
   * 
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list and zone list.
   * 
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
      eni: 'Eni',
      instanceVersion: 'InstanceVersion',
      payType: 'PayType',
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
      storageType: 'StorageType',
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
      eni: 'string',
      instanceVersion: 'string',
      payType: 'string',
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

