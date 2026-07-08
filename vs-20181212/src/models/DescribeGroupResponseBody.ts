// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupResponseBodyStats extends $dara.Model {
  /**
   * @remarks
   * The total number of devices in the group.
   * 
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @remarks
   * The number of intelligent electronic devices (IEDs) in the group.
   * 
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @remarks
   * The number of cameras in the group.
   * 
   * @example
   * 100
   */
  ipcNum?: number;
  /**
   * @remarks
   * The number of platforms in the group.
   * 
   * @example
   * 100
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

export class DescribeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Alias for the space ID.
   * 
   * @example
   * 337639*****24964-cn-qingdao
   */
  aliasId?: string;
  /**
   * @remarks
   * The name of the application used by the group.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * The callback URL that is used to receive device status updates in the group.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * A description of the group.
   * 
   * @example
   * 上海高速监控
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the group is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The GB/T 28181 ID that is associated with the group.
   * 
   * > This parameter is returned only for groups that use the GB/T 28181 protocol for stream ingest.
   * 
   * @example
   * 3100000*****0000001
   */
  gbId?: string;
  /**
   * @remarks
   * The IP address of the GB/T 28181 signaling server that is associated with the group.
   * 
   * > This parameter is returned only for groups that use the GB/T 28181 protocol for stream ingest.
   * 
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @remarks
   * The port of the GB/T 28181 signaling server that is associated with the group.
   * 
   * > This parameter is returned only for groups that use the GB/T 28181 protocol for stream ingest.
   * 
   * @example
   * 5060
   */
  gbPort?: number;
  /**
   * @remarks
   * The TCP ports of the GB/T 28181 signaling server that are provided by the group.
   * 
   * > This parameter is returned only for groups that use the GB/T 28181 protocol for stream ingest.
   */
  gbTcpPorts?: string[];
  /**
   * @remarks
   * The UDP ports of the GB/T 28181 signaling server that are provided by the group.
   * 
   * > This parameter is returned only for groups that use the GB/T 28181 protocol for stream ingest.
   */
  gbUdpPorts?: string[];
  /**
   * @remarks
   * The ID of the space.
   * 
   * @example
   * 337639****224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The ingest protocol used by the group. Valid values:
   * 
   * - gb28181
   * 
   * - rtmp
   * 
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @remarks
   * Indicates whether on-demand stream pulling is enabled.
   * 
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @remarks
   * The name of the space.
   * 
   * @example
   * 上海高速监控
   */
  name?: string;
  /**
   * @remarks
   * The streaming protocol used by the group. Valid values:
   * 
   * - flv
   * 
   * - hls
   * 
   * - rtmp
   * 
   * > You can specify multiple protocols. Separate them with commas (,).
   * 
   * @example
   * flv,hls,rtmp
   */
  outProtocol?: string;
  /**
   * @remarks
   * The streaming domain used by the group.
   * 
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * The ingest domain used by the group.
   * 
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * The region where the space is located, which is the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of devices in the group.
   */
  stats?: DescribeGroupResponseBodyStats;
  /**
   * @remarks
   * The status of the group.
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
      requestId: 'RequestId',
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
      requestId: 'string',
      stats: DescribeGroupResponseBodyStats,
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

