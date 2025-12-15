// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseProjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-10-09T04:54:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * Supabase Dashboard password (not used).
   * 
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * Supabase Dashboard user name (not used).
   * 
   * @example
   * null
   */
  dashboardUserName?: string;
  /**
   * @remarks
   * The ESSD performance level.
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The database engine type.
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
  expireTime?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription.
   * *   **Free**: Free.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The private (VPC) connection URL for the Supabase Dashboard.
   * 
   * @example
   * 192.168.0.1
   */
  privateConnectUrl?: string;
  /**
   * @remarks
   * The Supabase project ID.
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
   * The type of the Supabase instance.
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A comma-separated list of IP addresses and CIDR blocks allowed to connect. Valid values:
   * 
   * *   0.0.0.0/0
   * *   10.23.12.24(IP)
   * *   10.23.12.24/24. This is a CIDR block. The value`/24`indicates that the prefix of the CIDR block is 24-bit long. You can replace 24 with a value in the range of`[1,32]`.
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
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 2
   */
  storageSize?: number;
  /**
   * @remarks
   * The vSwitch ID of the instance.
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
      createTime: 'CreateTime',
      dashboardPassword: 'DashboardPassword',
      dashboardUserName: 'DashboardUserName',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      privateConnectUrl: 'PrivateConnectUrl',
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
      createTime: 'string',
      dashboardPassword: 'string',
      dashboardUserName: 'string',
      diskPerformanceLevel: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      payType: 'string',
      privateConnectUrl: 'string',
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
   * A list of objects, where each object represents a Supabase instance.
   */
  items?: ListSupabaseProjectsResponseBodyItems[];
  /**
   * @remarks
   * The maximum amount of data to read this time. Default value: 10.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token to use in the next request to get the next page. If this field is empty, there are no more results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
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
   * The total number of log entries returned.
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

