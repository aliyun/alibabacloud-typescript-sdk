// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsResponseBodyGroupsStats extends $dara.Model {
  /**
   * @remarks
   * Total number of devices in the group.
   * 
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @remarks
   * Number of intelligent devices in the group.
   * 
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @remarks
   * Number of cameras in the group.
   * 
   * @example
   * 200
   */
  ipcNum?: number;
  /**
   * @remarks
   * Number of platforms in the group.
   * 
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
   * @remarks
   * Alias for the group ID.
   * 
   * @example
   * 337639*****24964-cn-qingdao
   */
  aliasId?: string;
  /**
   * @remarks
   * Application name used by the group.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * Callback URL for device status updates in the group.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * Time when the group was created.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Group description.
   * 
   * @example
   * 测试视图计算
   */
  description?: string;
  /**
   * @remarks
   * Whether the group is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * GB ID provided by the group.
   * 
   * > This applies only to groups that use the GB protocol.
   * 
   * @example
   * 31000000000000000001
   */
  gbId?: string;
  /**
   * @remarks
   * GB signaling server IP address provided by the group.
   * 
   * > This applies only to groups that use the GB protocol.
   * 
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @remarks
   * GB signaling server port associated with the group.
   * 
   * > This applies only to groups that use the GB protocol.
   * 
   * @example
   * 5060
   */
  gbPort?: number;
  gbTcpPorts?: string[];
  gbUdpPorts?: string[];
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * 33763950877224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Ingest protocol used by the group.
   * 
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @remarks
   * Whether on-demand stream pulling is enabled.
   * 
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @remarks
   * Group name.
   * 
   * @example
   * 我的空间
   */
  name?: string;
  /**
   * @remarks
   * Playback protocol used by the group.
   * 
   * @example
   * rtmp,flv,hls
   */
  outProtocol?: string;
  /**
   * @remarks
   * Streaming domain used by the group.
   * 
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * Ingest domain used by the group.
   * 
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * The region where the space is located. This region serves as the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Device statistics for the group.
   */
  stats?: DescribeGroupsResponseBodyGroupsStats;
  /**
   * @remarks
   * Group status. Valid values:
   * 
   * - on (enabled)
   * 
   * - off (disabled)
   * 
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
  /**
   * @remarks
   * List of groups.
   */
  groups?: DescribeGroupsResponseBodyGroups[];
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of groups.
   * 
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

