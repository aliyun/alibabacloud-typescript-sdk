// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterServersResponseBodyClusterServers extends $dara.Model {
  /**
   * @example
   * asiapacific
   */
  continents?: string;
  /**
   * @example
   * 410
   */
  continentsValue?: number;
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * 1665987186000
   */
  createTimestamp?: number;
  customName?: string;
  /**
   * @example
   * 1
   */
  groupId?: number;
  groupName?: string;
  /**
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @example
   * qsh5-sec-waf-*****-6
   */
  hostName?: string;
  /**
   * @example
   * 1.*.*1。
   */
  ip?: string;
  /**
   * @example
   * running
   */
  jobStatus?: string;
  /**
   * @example
   * **:**:00:02:eb:c7
   */
  mac?: string;
  /**
   * @example
   * 33547386880
   */
  memory?: number;
  /**
   * @example
   * 28ab688cd403563e8e173*****79600
   */
  mid?: string;
  /**
   * @example
   * aliyun。
   */
  operator?: string;
  /**
   * @example
   * 0
   */
  operatorValue?: number;
  /**
   * @example
   * beijing
   */
  regionCode?: string;
  /**
   * @example
   * 0
   */
  regionCodeValue?: number;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
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
  clusterServers?: DescribeHybridCloudClusterServersResponseBodyClusterServers[];
  /**
   * @example
   * C3B0FDD2-11CE-59A5-BEB5-*****1A969
   */
  requestId?: string;
  /**
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

