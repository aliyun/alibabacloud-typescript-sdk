// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupResponseBodyStats } from "./DescribeGroupResponseBodyStats";


export class DescribeGroupResponseBody extends $dara.Model {
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
   * 3100000*****0000001
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
   * 337639****224964-cn-qingdao
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
   * flv,hls,rtmp
   */
  outProtocol?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  stats?: DescribeGroupResponseBodyStats;
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

