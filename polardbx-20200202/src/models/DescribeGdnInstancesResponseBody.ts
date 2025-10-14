// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList extends $dara.Model {
  /**
   * @example
   * polarx.x4.medium.2e
   */
  classCode?: string;
  /**
   * @example
   * polarx.x4.medium.2e
   */
  cnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  cnNodeCount?: string;
  /**
   * @example
   * drds_polarxpre_public_cn
   */
  commodityCode?: string;
  dataSyncStatus?: string;
  /**
   * @example
   * mysql.n4.medium.25
   */
  dnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  dnNodeCount?: string;
  /**
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  expireTime?: string;
  /**
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  gmtCreated?: string;
  /**
   * @example
   * pxc-***
   */
  memberName?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  primaryZone?: string;
  readWriteStatus?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * primary、
   * standby
   */
  role?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  secondaryZone?: string;
  /**
   * @example
   * 1s
   */
  secondsBehindMaster?: string;
  /**
   * @example
   * Creating
   */
  status?: string;
  taskStatus?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  tertiaryZone?: string;
  /**
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
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * gdn-***
   */
  gdnInstanceName?: string;
  gdnMode?: string;
  /**
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  gmtCreated?: string;
  memberList?: DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList[];
  /**
   * @example
   * 5.7
   */
  mysqlVersion?: string;
  rplConflictStrategy?: string;
  rplDmlStrategy?: string;
  rplSyncDdl?: boolean;
  /**
   * @example
   * Creating
   */
  status?: string;
  /**
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
  gdnInstanceList?: DescribeGdnInstancesResponseBodyDataGdnInstanceList[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
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
  data?: DescribeGdnInstancesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7B044BD1-6402-5DE9-9AED-63D15A994E37
   */
  requestId?: string;
  /**
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

