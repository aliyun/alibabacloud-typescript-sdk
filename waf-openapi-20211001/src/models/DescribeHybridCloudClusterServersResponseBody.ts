// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterServersResponseBodyClusterServers extends $dara.Model {
  /**
   * @remarks
   * The continent.
   * 
   * @example
   * asiapacific
   */
  continents?: string;
  /**
   * @remarks
   * The continent code of the protection cluster.
   * 
   * > For the list of code values, see the supplementary description of response parameters.
   * 
   * @example
   * 410
   */
  continentsValue?: number;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The creation timestamp, in milliseconds.
   * 
   * @example
   * 1665987186000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * customTest
   */
  customName?: string;
  /**
   * @remarks
   * The node group ID.
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
   * groupTest
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the hybrid cloud node group. Valid values:
   * 
   * - **protect**: protection.
   * 
   * - **control**: management.
   * 
   * - **storage**: storage.
   * 
   * - **controlStorage**: management and storage.
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * qsh5-sec-waf-*****-6
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.*.*1
   */
  ip?: string;
  /**
   * @remarks
   * The running status of the machine.
   * 
   * @example
   * running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The MAC address.
   * 
   * @example
   * **:**:00:02:eb:c7
   */
  mac?: string;
  /**
   * @remarks
   * The memory data.
   * 
   * @example
   * 33547386880
   */
  memory?: number;
  /**
   * @remarks
   * The machine identifier (MID).
   * 
   * @example
   * 28ab688cd403563e8e173*****79600
   */
  mid?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * aliyun
   */
  operator?: string;
  /**
   * @remarks
   * The operator value.
   * 
   * @example
   * 0
   */
  operatorValue?: number;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * beijing
   */
  regionCode?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * 0
   */
  regionCodeValue?: number;
  /**
   * @remarks
   * The machine status.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The last update timestamp.
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
   * The result list.
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

