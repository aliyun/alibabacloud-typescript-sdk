// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs extends $dara.Model {
  /**
   * @example
   * polardbx-xxx.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 3306
   */
  port?: number;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-xxxxxx
   */
  VPCId?: string;
  vSwitchId?: string;
  /**
   * @example
   * pxc-zkralxpc5d****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes extends $dara.Model {
  computeNodeId?: string;
  /**
   * @example
   * pxc-xdb-xxxxxx
   */
  dataNodeId?: string;
  id?: string;
  /**
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeNodeId: 'ComputeNodeId',
      dataNodeId: 'DataNodeId',
      id: 'Id',
      nodeClass: 'NodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodeId: 'string',
      dataNodeId: 'string',
      id: 'string',
      nodeClass: 'string',
      regionId: 'string',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList extends $dara.Model {
  memberName?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet extends $dara.Model {
  /**
   * @example
   * key2
   */
  key?: string;
  /**
   * @example
   * value2
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstance extends $dara.Model {
  canNotCreateColumnar?: boolean;
  /**
   * @example
   * polarx.x4.xlarge.2e
   */
  cnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  cnNodeCount?: number;
  columnarInstanceName?: string;
  columnarReadDBInstances?: string[];
  /**
   * @example
   * drds_polarxpost_public_cn
   */
  commodityCode?: string;
  connAddrs?: DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs[];
  connectionString?: string;
  cpuType?: string;
  /**
   * @example
   * 2021-08-31T08:56:25.000+0000
   */
  createTime?: string;
  /**
   * @example
   * ReadWrite
   */
  DBInstanceType?: string;
  /**
   * @example
   * polarx.x4.large.2e
   */
  DBNodeClass?: string;
  /**
   * @example
   * 2
   */
  DBNodeCount?: number;
  DBNodes?: DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes[];
  /**
   * @example
   * polarx
   */
  DBType?: string;
  /**
   * @example
   * 5.5
   */
  DBVersion?: string;
  /**
   * @example
   * test instance
   */
  description?: string;
  differentDNSpec?: boolean;
  /**
   * @example
   * mysql.x8.large.25
   */
  dnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  dnNodeCount?: number;
  /**
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @example
   * 2022-08-31T16:00:00.000+0000
   */
  expireDate?: string;
  /**
   * @example
   * false
   */
  expired?: string;
  gdnInstanceName?: string;
  gdnMemberList?: DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList[];
  gdnRole?: string;
  /**
   * @example
   * pxc-zkralxpc5d****
   */
  id?: string;
  /**
   * @example
   * 18
   */
  kindCode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  LTSVersions?: string[];
  /**
   * @example
   * polarx-kernel_5.4.11-16301083_xcluster-20210805
   */
  latestMinorVersion?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * 06:00
   */
  maintainEndTime?: string;
  /**
   * @example
   * 06:00
   */
  maintainStartTime?: string;
  /**
   * @example
   * polarx-kernel_5.4.11-16301083_xcluster-20210805
   */
  minorVersion?: string;
  /**
   * @example
   * VPC
   */
  network?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  primaryInstanceId?: string;
  /**
   * @remarks
   * 主可用区。
   * 
   * This parameter is required.
   */
  primaryZone?: string;
  readDBInstances?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * false
   */
  rightsSeparationEnabled?: boolean;
  /**
   * @example
   * disabled
   */
  rightsSeparationStatus?: string;
  /**
   * @remarks
   * 次可用区。
   */
  secondaryZone?: string;
  /**
   * @example
   * enterprise
   */
  series?: string;
  specCategory?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  storageType?: string;
  /**
   * @example
   * 17042505728
   */
  storageUsed?: number;
  tagSet?: DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet[];
  /**
   * @remarks
   * 第三可用区。
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * 拓扑类型：
   * 
   * - **3azones**：三可用区；
   * - **1azone**：单可用区。
   * 
   * This parameter is required.
   */
  topologyType?: string;
  /**
   * @example
   * ReadWrite
   */
  type?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-xxxxx
   */
  VPCId?: string;
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      canNotCreateColumnar: 'CanNotCreateColumnar',
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      columnarInstanceName: 'ColumnarInstanceName',
      columnarReadDBInstances: 'ColumnarReadDBInstances',
      commodityCode: 'CommodityCode',
      connAddrs: 'ConnAddrs',
      connectionString: 'ConnectionString',
      cpuType: 'CpuType',
      createTime: 'CreateTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      differentDNSpec: 'DifferentDNSpec',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      engine: 'Engine',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      gdnInstanceName: 'GdnInstanceName',
      gdnMemberList: 'GdnMemberList',
      gdnRole: 'GdnRole',
      id: 'Id',
      kindCode: 'KindCode',
      LTSVersions: 'LTSVersions',
      latestMinorVersion: 'LatestMinorVersion',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      minorVersion: 'MinorVersion',
      network: 'Network',
      payType: 'PayType',
      port: 'Port',
      primaryInstanceId: 'PrimaryInstanceId',
      primaryZone: 'PrimaryZone',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      rightsSeparationStatus: 'RightsSeparationStatus',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      specCategory: 'SpecCategory',
      status: 'Status',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      tagSet: 'TagSet',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotCreateColumnar: 'boolean',
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      columnarInstanceName: 'string',
      columnarReadDBInstances: { 'type': 'array', 'itemType': 'string' },
      commodityCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs },
      connectionString: 'string',
      cpuType: 'string',
      createTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      differentDNSpec: 'boolean',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      engine: 'string',
      expireDate: 'string',
      expired: 'string',
      gdnInstanceName: 'string',
      gdnMemberList: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList },
      gdnRole: 'string',
      id: 'string',
      kindCode: 'number',
      LTSVersions: { 'type': 'array', 'itemType': 'string' },
      latestMinorVersion: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      minorVersion: 'string',
      network: 'string',
      payType: 'string',
      port: 'string',
      primaryInstanceId: 'string',
      primaryZone: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      rightsSeparationEnabled: 'boolean',
      rightsSeparationStatus: 'string',
      secondaryZone: 'string',
      series: 'string',
      specCategory: 'string',
      status: 'string',
      storageType: 'string',
      storageUsed: 'number',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet },
      tertiaryZone: 'string',
      topologyType: 'string',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnarReadDBInstances)) {
      $dara.Model.validateArray(this.columnarReadDBInstances);
    }
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(Array.isArray(this.gdnMemberList)) {
      $dara.Model.validateArray(this.gdnMemberList);
    }
    if(Array.isArray(this.LTSVersions)) {
      $dara.Model.validateArray(this.LTSVersions);
    }
    if(Array.isArray(this.readDBInstances)) {
      $dara.Model.validateArray(this.readDBInstances);
    }
    if(Array.isArray(this.tagSet)) {
      $dara.Model.validateArray(this.tagSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstance;
  /**
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: DescribeDBInstanceAttributeResponseBodyDBInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInstance && typeof (this.DBInstance as any).validate === 'function') {
      (this.DBInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

