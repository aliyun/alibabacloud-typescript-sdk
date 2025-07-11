// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsResponseBodyGroupsStats extends $dara.Model {
  /**
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @example
   * 200
   */
  ipcNum?: number;
  /**
   * @example
   * 0
   */
  platformNum?: number;
  static names(): { [key: string]: string } {
    return {
      deviceNum: 'DeviceNum',
      iedNum: 'IedNum',
      ipcNum: 'IpcNum',
      platformNum: 'PlatformNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNum: 'number',
      iedNum: 'number',
      ipcNum: 'number',
      platformNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @example
   * 337639*****24964-cn-qingdao
   */
  aliasId?: string;
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 31000000000000000001
   */
  gbId?: string;
  /**
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @example
   * 5060
   */
  gbPort?: number;
  gbTcpPorts?: string[];
  gbUdpPorts?: string[];
  /**
   * @example
   * 33763950877224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  name?: string;
  /**
   * @example
   * rtmp,flv,hls
   */
  outProtocol?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  stats?: DescribeGroupsResponseBodyGroupsStats;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliasId: 'AliasId',
      app: 'App',
      callback: 'Callback',
      createdTime: 'CreatedTime',
      description: 'Description',
      enabled: 'Enabled',
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      gbTcpPorts: 'GbTcpPorts',
      gbUdpPorts: 'GbUdpPorts',
      id: 'Id',
      inProtocol: 'InProtocol',
      lazyPull: 'LazyPull',
      name: 'Name',
      outProtocol: 'OutProtocol',
      playDomain: 'PlayDomain',
      pushDomain: 'PushDomain',
      region: 'Region',
      stats: 'Stats',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasId: 'string',
      app: 'string',
      callback: 'string',
      createdTime: 'string',
      description: 'string',
      enabled: 'boolean',
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'number',
      gbTcpPorts: { 'type': 'array', 'itemType': 'string' },
      gbUdpPorts: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      inProtocol: 'string',
      lazyPull: 'boolean',
      name: 'string',
      outProtocol: 'string',
      playDomain: 'string',
      pushDomain: 'string',
      region: 'string',
      stats: DescribeGroupsResponseBodyGroupsStats,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gbTcpPorts)) {
      $dara.Model.validateArray(this.gbTcpPorts);
    }
    if(Array.isArray(this.gbUdpPorts)) {
      $dara.Model.validateArray(this.gbUdpPorts);
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBody extends $dara.Model {
  groups?: DescribeGroupsResponseBodyGroups[];
  /**
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

