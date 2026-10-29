// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupResponseBodyStats extends $dara.Model {
  /**
   * @remarks
   * The total number of devices in the workspace.
   * 
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @remarks
   * The number of intelligent devices in the workspace.
   * 
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @remarks
   * The number of cameras in the workspace.
   * 
   * @example
   * 100
   */
  ipcNum?: number;
  /**
   * @remarks
   * The number of platforms in the workspace.
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
   * The alias of the workspace ID.
   * 
   * @example
   * 337639*****24964-cn-qingdao
   */
  aliasId?: string;
  /**
   * @remarks
   * The name of the application used by the workspace.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * The callback triggered when the device status in the workspace is updated.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The time when the workspace was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * Shanghai Expressway Monitoring
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the workspace is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The GB/T 28181 ID associated with the workspace.
   * > This parameter is applicable only to workspaces that are accessed by using the GB/T 28181 protocol.
   * 
   * @example
   * 3100000*****0000001
   */
  gbId?: string;
  /**
   * @remarks
   * The IP address of the GB/T 28181 signaling server associated with the workspace.
   * > This parameter is applicable only to workspaces that are accessed by using the GB/T 28181 protocol.
   * 
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @remarks
   * The server port of the GB/T 28181 signaling server associated with the workspace.
   * > This parameter is applicable only to workspaces that are accessed by using the GB/T 28181 protocol.
   * 
   * @example
   * 5060
   */
  gbPort?: number;
  /**
   * @remarks
   * The TCP port of the GB/T 28181 signaling server provided by the workspace.
   * > This parameter is applicable only to workspaces that are accessed by using the GB/T 28181 protocol.
   */
  gbTcpPorts?: string[];
  /**
   * @remarks
   * The UDP port of the GB/T 28181 signaling server provided by the workspace.
   * > This parameter is applicable only to workspaces that are accessed by using the GB/T 28181 protocol.
   */
  gbUdpPorts?: string[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 337639****224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The access protocol used by the workspace. Valid values:
   * - gb28181
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
   * The workspace name.
   * 
   * @example
   * Shanghai Expressway Monitoring
   */
  name?: string;
  /**
   * @remarks
   * The playback protocol used by the workspace. Valid values:
   * - flv
   * - hls
   * - rtmp
   * > You can specify multiple values. Separate multiple values with commas (,).
   * 
   * @example
   * flv,hls,rtmp
   */
  outProtocol?: string;
  /**
   * @remarks
   * The streaming domain name used by the workspace.
   * 
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * The ingest domain name used by the workspace.
   * 
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * The region to which the workspace belongs, which is the service center.
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
   * The statistics information of the devices in the workspace.
   */
  stats?: DescribeGroupResponseBodyStats;
  /**
   * @remarks
   * The workspace status.
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

