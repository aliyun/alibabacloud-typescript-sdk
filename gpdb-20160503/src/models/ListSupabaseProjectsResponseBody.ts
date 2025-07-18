// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseProjectsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2021-10-09T04:54:08Z
   */
  createTime?: string;
  /**
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @example
   * null
   */
  dashboardUserName?: string;
  /**
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @example
   * gpdb
   */
  engine?: string;
  /**
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 192.168.0.1
   */
  privateConnectUrl?: string;
  /**
   * @example
   * sbp-12***
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
   * 127.0.0.1
   */
  securityIPList?: string;
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
   * @remarks
   * vSwitch ID。
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  vpcId?: string;
  /**
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
  items?: ListSupabaseProjectsResponseBodyItems[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
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

