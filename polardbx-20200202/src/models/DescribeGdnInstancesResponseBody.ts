// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * polarx.x4.medium.2e
   */
  classCode?: string;
  /**
   * @remarks
   * The CN node specifications. Valid values:
   * 
   * - **polarx.x4.medium.2e**: 2 cores, 8 GB
   * - **polarx.x4.large.2e**: 4 cores, 16 GB
   * - **polarx.x8.large.2e**: 4 cores, 32 GB
   * - **polarx.x4.xlarge.2e**: 8 cores, 32 GB
   * - **polarx.x8.xlarge.2e**: 8 cores, 64 GB
   * - **polarx.x4.2xlarge.2e**: 16 cores, 64 GB
   * - **polarx.x8.2xlarge.2e**: 16 cores, 128 GB
   * - **polarx.x4.4xlarge.2e**: 32 cores, 128 GB
   * - **polarx.x8.4xlarge.2e**: 32 cores, 256 GB
   * - **polarx.st.8xlarge.2e**: 60 cores, 470 GB
   * - **polarx.st.12xlarge.2e**: 90 cores, 720 GB.
   * 
   * @example
   * polarx.x4.medium.2e
   */
  cnNodeClassCode?: string;
  /**
   * @remarks
   * The number of CN nodes.
   * 
   * @example
   * 2
   */
  cnNodeCount?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * drds_polarxpre_public_cn
   */
  commodityCode?: string;
  dataSyncStatus?: string;
  /**
   * @remarks
   * The DN node specifications. Valid values:
   * - **mysql.n2.medium.25**: 2 cores, 4 GB
   * - **mysql.n4.medium.25**: 2 cores, 8 GB
   * - **mysql.x8.medium.25**: 2 cores, 16 GB
   * - **mysql.n2.large.25**: 4 cores, 8 GB
   * - **mysql.n4.large.25**: 4 cores, 16 GB
   * - **mysql.x8.large.25**: 4 cores, 32 GB
   * - **mysql.n2.xlarge.25**: 8 cores, 16 GB
   * - **mysql.n4.xlarge.25**: 8 cores, 32 GB
   * - **mysql.x8.xlarge.25**: 8 cores, 64 GB
   * - **mysql.n4.2xlarge.25**: 16 cores, 64 GB
   * - **mysql.x8.2xlarge.25**: 16 cores, 128 GB
   * - **mysql.x4.4xlarge.25**: 32 cores, 128 GB
   * - **mysql.x8.4xlarge.25**: 32 cores, 256 GB
   * - **mysql.st.8xlarge.25**: 60 cores, 470 GB
   * - **mysql.st.12xlarge.25**: 90 cores, 720 GB.
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnNodeClassCode?: string;
  /**
   * @remarks
   * The number of DN nodes.
   * 
   * @example
   * 2
   */
  dnNodeCount?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  expireTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The member name (PolarDB-X instance name).
   * 
   * @example
   * pxc-***
   */
  memberName?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  primaryZone?: string;
  readWriteStatus?: string;
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
   * The member role.
   * 
   * @example
   * primary、
   * standby
   */
  role?: string;
  /**
   * @remarks
   * The secondary zone.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  secondaryZone?: string;
  /**
   * @remarks
   * The data latency.
   * 
   * @example
   * 1s
   */
  secondsBehindMaster?: string;
  /**
   * @remarks
   * The member status.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The switchover task status.
   * 
   * @example
   * prepared：参数初始化完毕
   * set_old_primary_readonly：原主实例已禁写
   * set_new_primary_read_write：已切换
   * timeout：任务超时
   * rollback：已回滚
   */
  taskStatus?: string;
  /**
   * @remarks
   * The zone for Three-zone deployment. This zone is active only when three-zone deployment is enabled.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      commodityCode: 'CommodityCode',
      dataSyncStatus: 'DataSyncStatus',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      expireTime: 'ExpireTime',
      gmtCreated: 'GmtCreated',
      memberName: 'MemberName',
      payType: 'PayType',
      primaryZone: 'PrimaryZone',
      readWriteStatus: 'ReadWriteStatus',
      regionId: 'RegionId',
      role: 'Role',
      secondaryZone: 'SecondaryZone',
      secondsBehindMaster: 'SecondsBehindMaster',
      status: 'Status',
      taskStatus: 'TaskStatus',
      tertiaryZone: 'TertiaryZone',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      cnNodeClassCode: 'string',
      cnNodeCount: 'string',
      commodityCode: 'string',
      dataSyncStatus: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'string',
      expireTime: 'string',
      gmtCreated: 'string',
      memberName: 'string',
      payType: 'string',
      primaryZone: 'string',
      readWriteStatus: 'string',
      regionId: 'string',
      role: 'string',
      secondaryZone: 'string',
      secondsBehindMaster: 'string',
      status: 'string',
      taskStatus: 'string',
      tertiaryZone: 'string',
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

export class DescribeGdnInstancesResponseBodyDataGdnInstanceList extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The GDN instance name.
   * 
   * @example
   * gdn-***
   */
  gdnInstanceName?: string;
  gdnMode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The list of members.
   */
  memberList?: DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList[];
  /**
   * @remarks
   * The MySQL version supported by the instance.
   * 
   * @example
   * 5.7
   */
  mysqlVersion?: string;
  rplConflictStrategy?: string;
  rplDmlStrategy?: string;
  rplSyncDdl?: boolean;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The switchover log.
   * 
   * @example
   * ""
   */
  switchHistory?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gdnInstanceName: 'GdnInstanceName',
      gdnMode: 'GdnMode',
      gmtCreated: 'GmtCreated',
      memberList: 'MemberList',
      mysqlVersion: 'MysqlVersion',
      rplConflictStrategy: 'RplConflictStrategy',
      rplDmlStrategy: 'RplDmlStrategy',
      rplSyncDdl: 'RplSyncDdl',
      status: 'Status',
      switchHistory: 'SwitchHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gdnInstanceName: 'string',
      gdnMode: 'string',
      gmtCreated: 'string',
      memberList: { 'type': 'array', 'itemType': DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList },
      mysqlVersion: 'string',
      rplConflictStrategy: 'string',
      rplDmlStrategy: 'string',
      rplSyncDdl: 'boolean',
      status: 'string',
      switchHistory: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGdnInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of GDN instances.
   */
  gdnInstanceList?: DescribeGdnInstancesResponseBodyDataGdnInstanceList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 130
   */
  totalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      gdnInstanceList: 'GdnInstanceList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gdnInstanceList: { 'type': 'array', 'itemType': DescribeGdnInstancesResponseBodyDataGdnInstanceList },
      pageNumber: 'string',
      pageSize: 'string',
      totalNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gdnInstanceList)) {
      $dara.Model.validateArray(this.gdnInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGdnInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance details.
   */
  data?: DescribeGdnInstancesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * > This parameter is empty when the request succeeds. When the request fails, an exception message is returned, such as an error code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B044BD1-6402-5DE9-9AED-63D15A994E37
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeGdnInstancesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

