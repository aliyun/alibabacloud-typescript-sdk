// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDnsHostResponseBodyDnsHostList extends $dara.Model {
  /**
   * @example
   * ns3
   */
  dnsName?: string;
  ipList?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDnsHostResponseBody extends $dara.Model {
  dnsHostList?: QueryDnsHostResponseBodyDnsHostList[];
  /**
   * @example
   * 18A313DD-3AF3-40AA-84F9-56BA45DC511F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsHostList: 'DnsHostList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsHostList: { 'type': 'array', 'itemType': QueryDnsHostResponseBodyDnsHostList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsHostList)) {
      $dara.Model.validateArray(this.dnsHostList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

