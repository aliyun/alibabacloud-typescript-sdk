// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterServersResponseBodyClusterServers extends $dara.Model {
  /**
   * @remarks
   * The continent identifier of the server, such as `asiapacific`.
   * 
   * @example
   * asiapacific
   */
  continents?: string;
  /**
   * @remarks
   * The continent code of the protection cluster.
   * 
   * > For a list of valid codes, see the supplementary description of response parameters.
   * 
   * @example
   * 410
   */
  continentsValue?: number;
  /**
   * @remarks
   * The number of CPU cores of the server.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the server was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665987186000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The custom name of the server.
   * 
   * @example
   * 测试组
   */
  customName?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * 测试组。
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the hybrid cloud node group. Valid values:
   * 
   * - **protect**: protection.
   * 
   * - **control**: control.
   * 
   * - **storage**: storage.
   * 
   * - **controlStorage**: control and storage.
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The hostname of the server.
   * 
   * @example
   * qsh5-sec-waf-*****-6
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 1.*.*1。
   */
  ip?: string;
  /**
   * @remarks
   * The running status of the server.
   * 
   * @example
   * running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The MAC address of the server.
   * 
   * @example
   * **:**:00:02:eb:c7
   */
  mac?: string;
  /**
   * @remarks
   * The memory size of the server. Unit: bytes.
   * 
   * @example
   * 33547386880
   */
  memory?: number;
  /**
   * @remarks
   * The machine ID (MID) of the server.
   * 
   * @example
   * 28ab688cd403563e8e173*****79600
   */
  mid?: string;
  /**
   * @remarks
   * The cloud service provider where the server resides.
   * 
   * @example
   * aliyun。
   */
  operator?: string;
  /**
   * @remarks
   * The carrier code of the server.
   * 
   * @example
   * 0
   */
  operatorValue?: number;
  /**
   * @remarks
   * The region identifier of the server, such as `beijing`.
   * 
   * @example
   * beijing
   */
  regionCode?: string;
  /**
   * @remarks
   * The numeric code of the region where the server resides.
   * 
   * @example
   * 0
   */
  regionCodeValue?: number;
  /**
   * @remarks
   * The health status of the server in the hybrid cloud cluster.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The time when the server was last updated. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1711953897000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      continents: 'Continents',
      continentsValue: 'ContinentsValue',
      cpu: 'Cpu',
      createTimestamp: 'CreateTimestamp',
      customName: 'CustomName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      hostName: 'HostName',
      ip: 'Ip',
      jobStatus: 'JobStatus',
      mac: 'Mac',
      memory: 'Memory',
      mid: 'Mid',
      operator: 'Operator',
      operatorValue: 'OperatorValue',
      regionCode: 'RegionCode',
      regionCodeValue: 'RegionCodeValue',
      status: 'Status',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continents: 'string',
      continentsValue: 'number',
      cpu: 'number',
      createTimestamp: 'number',
      customName: 'string',
      groupId: 'number',
      groupName: 'string',
      groupType: 'string',
      hostName: 'string',
      ip: 'string',
      jobStatus: 'string',
      mac: 'string',
      memory: 'number',
      mid: 'string',
      operator: 'string',
      operatorValue: 'number',
      regionCode: 'string',
      regionCodeValue: 'number',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClusterServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The servers in the hybrid cloud cluster.
   */
  clusterServers?: DescribeHybridCloudClusterServersResponseBodyClusterServers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3B0FDD2-11CE-59A5-BEB5-*****1A969
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterServers: 'ClusterServers',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterServers: { 'type': 'array', 'itemType': DescribeHybridCloudClusterServersResponseBodyClusterServers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusterServers)) {
      $dara.Model.validateArray(this.clusterServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

