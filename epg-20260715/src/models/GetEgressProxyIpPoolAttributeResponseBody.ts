// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyIpPoolAttributeResponseBodyTags extends $dara.Model {
  /**
   * @example
   * epg
   */
  key?: string;
  /**
   * @example
   * test
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

export class GetEgressProxyIpPoolAttributeResponseBodyZoneMappingsIpAddresses extends $dara.Model {
  /**
   * @example
   * eip-2zep1zbmxnvoyt1vsj****
   */
  eipAllocationId?: string;
  /**
   * @example
   * 192.168.10.1
   */
  privateIpv4Address?: string;
  /**
   * @example
   * 48.101.2.1
   */
  publicIpv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      eipAllocationId: 'EipAllocationId',
      privateIpv4Address: 'PrivateIpv4Address',
      publicIpv4Address: 'PublicIpv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAllocationId: 'string',
      privateIpv4Address: 'string',
      publicIpv4Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyIpPoolAttributeResponseBodyZoneMappings extends $dara.Model {
  ipAddresses?: GetEgressProxyIpPoolAttributeResponseBodyZoneMappingsIpAddresses[];
  /**
   * @example
   * vsw-uf64h3tjn2xsd94mb****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-guangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddresses: 'IpAddresses',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddresses: { 'type': 'array', 'itemType': GetEgressProxyIpPoolAttributeResponseBodyZoneMappingsIpAddresses },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyIpPoolAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @example
   * testEpg
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
   * 01A05AB8-D4FC-5B68-B645-5BA513A94F36
   */
  requestId?: string;
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
  tags?: GetEgressProxyIpPoolAttributeResponseBodyTags[];
  zoneMappings?: GetEgressProxyIpPoolAttributeResponseBodyZoneMappings[];
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
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      tags: 'Tags',
      zoneMappings: 'ZoneMappings',
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
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetEgressProxyIpPoolAttributeResponseBodyTags },
      zoneMappings: { 'type': 'array', 'itemType': GetEgressProxyIpPoolAttributeResponseBodyZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

