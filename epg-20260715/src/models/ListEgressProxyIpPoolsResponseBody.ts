// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyIpPoolsResponseBodyEgressProxyIpPoolsTags extends $dara.Model {
  /**
   * @example
   * Physical_QPS,Thread_Detail,Logic_RT,Physical_RT,Slow_RequestCount
   */
  key?: string;
  /**
   * @example
   * 1770104466
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

export class ListEgressProxyIpPoolsResponseBodyEgressProxyIpPools extends $dara.Model {
  /**
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @example
   * 2026-03-11T11:18:35
   */
  createTime?: string;
  /**
   * @example
   * {\\"Type\\": \\"text\\", \\"Value\\": \\"Ensures that assets are protected by Cloud Firewall. Requirement: Enable the Internet Firewall feature.\\"}
   */
  description?: string;
  /**
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  /**
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyIpPoolName?: string;
  /**
   * @example
   * SourceIP
   */
  hashFactor?: string;
  /**
   * @example
   * X-Forwarded-For
   */
  hashHeaderName?: string;
  /**
   * @example
   * Random
   */
  scheduler?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  tags?: ListEgressProxyIpPoolsResponseBodyEgressProxyIpPoolsTags[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyGatewayId: 'EgressProxyGatewayId',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      egressProxyIpPoolName: 'EgressProxyIpPoolName',
      hashFactor: 'HashFactor',
      hashHeaderName: 'HashHeaderName',
      scheduler: 'Scheduler',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      createTime: 'string',
      description: 'string',
      egressProxyGatewayId: 'string',
      egressProxyIpPoolId: 'string',
      egressProxyIpPoolName: 'string',
      hashFactor: 'string',
      hashHeaderName: 'string',
      scheduler: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListEgressProxyIpPoolsResponseBodyEgressProxyIpPoolsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEgressProxyIpPoolsResponseBody extends $dara.Model {
  egressProxyIpPools?: ListEgressProxyIpPoolsResponseBodyEgressProxyIpPools[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFydY8mmse+9oiDWdR7XiKw/GLUmEZbYNsGL0evBky1i+FT5KS4q2RSGRQDNmuSWlq6KV1PiloZen3lB3ZXwB0vA==
   */
  nextToken?: string;
  /**
   * @example
   * C79118A9-CA6D-5359-B53E-111BE8A03DCF
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyIpPools: 'EgressProxyIpPools',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyIpPools: { 'type': 'array', 'itemType': ListEgressProxyIpPoolsResponseBodyEgressProxyIpPools },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyIpPools)) {
      $dara.Model.validateArray(this.egressProxyIpPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

