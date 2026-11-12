// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseProjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable **auto-start and auto-stop**.
   * Valid values:
   * - true: enabled. After this feature is enabled, Supabase automatically pauses and resumes the instance based on traffic.
   * - false: disabled. After this feature is disabled, the auto-start and auto-stop feature of Supabase is turned off.
   * 
   * @example
   * false
   */
  autoScale?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-10-09T04:54:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The password for the Supabase dashboard. This parameter is not used.
   * 
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The username for the Supabase dashboard. This parameter is not used.
   * 
   * @example
   * null
   */
  dashboardUserName?: string;
  /**
   * @remarks
   * The performance level of the cloud disk.
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
   * gpdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2026-04-27T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * - **Free**: free of charge.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The internal network connection string for the Supabase dashboard.
   * 
   * @example
   * 192.168.0.1
   */
  privateConnectUrl?: string;
  /**
   * @remarks
   * The detailed description of the Supabase project.
   * 
   * @example
   * for-test-project
   */
  projectDescription?: string;
  /**
   * @remarks
   * The ID of the Supabase instance.
   * 
   * @example
   * sbp-12***
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
   * The specifications of the Supabase instance.
   * 
   * @example
   * 1C1G
   */
  projectSpec?: string;
  /**
   * @remarks
   * The public network connection string for the Supabase dashboard.
   * 
   * @example
   * 10.154.11.10
   */
  publicConnectUrl?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP addresses in the IP whitelist. Separate multiple IP addresses with commas. The following three formats are supported:
   * - 0.0.0.0/0
   * - 10.23.12.24 (IP address)
   * - 10.23.12.24/24 (CIDR block. `/24` specifies the length of the prefix in the IP address. Valid values of the prefix length: 1 to 32.)
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
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
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  storageSize?: number;
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
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      createTime: 'CreateTime',
      dashboardPassword: 'DashboardPassword',
      dashboardUserName: 'DashboardUserName',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      privateConnectUrl: 'PrivateConnectUrl',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      publicConnectUrl: 'PublicConnectUrl',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      status: 'Status',
      storageSize: 'StorageSize',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'string',
      createTime: 'string',
      dashboardPassword: 'string',
      dashboardUserName: 'string',
      diskPerformanceLevel: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      payType: 'string',
      privateConnectUrl: 'string',
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectSpec: 'string',
      publicConnectUrl: 'string',
      regionId: 'string',
      securityIPList: 'string',
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

export class ListSupabaseProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance details.
   */
  items?: ListSupabaseProjectsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results to return for the current request. Default value: 10.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
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
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSupabaseProjectsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

