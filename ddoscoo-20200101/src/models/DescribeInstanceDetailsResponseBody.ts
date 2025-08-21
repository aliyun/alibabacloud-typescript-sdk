// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a custom certificate is configured.
   * 
   * @example
   * true
   */
  certConfigured?: boolean;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.117.XX.XX
   */
  eip?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * default
   */
  functionVersion?: string;
  /**
   * @remarks
   * The IP address-based forwarding mode of the instance. Valid values:
   * 
   * *   **fnat**: Requests from IPv4 addresses are forwarded to origin servers that use IPv4 addresses and requests from IPv6 addresses are forwarded to origin servers that use IPv6 addresses.
   * *   **v6tov4**: All requests are forwarded to origin servers that use IPv4 addresses.
   * 
   * @example
   * fnat
   */
  ipMode?: string;
  /**
   * @remarks
   * The IP version of the protocol. Valid values:
   * 
   * *   **Ipv4**: IPv4
   * *   **Ipv6**: IPv6
   * 
   * @example
   * Ipv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether the TLS 1.3 version is supported.
   * 
   * @example
   * false
   */
  ssl13Enabled?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **normal**: indicates that the instance is normal.
   * *   **expired**: indicates that the instance expired.
   * *   **defense**: indicates that traffic scrubbing is performed on the asset that is protected by the instance.
   * *   **blackhole**: indicates that blackhole filtering is triggered for the asset that is protected by the instance.
   * *   **punished**: indicates that the instance is in penalty.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) version that is configured.
   * 
   * @example
   * tls1.2
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certConfigured: 'CertConfigured',
      eip: 'Eip',
      functionVersion: 'FunctionVersion',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      ssl13Enabled: 'Ssl13Enabled',
      status: 'Status',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfigured: 'boolean',
      eip: 'string',
      functionVersion: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      ssl13Enabled: 'boolean',
      status: 'string',
      tlsVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $dara.Model {
  /**
   * @remarks
   * The IP address information about the Anti-DDoS Proxy instance.
   */
  eipInfos?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-zvp2eibz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protection line of the instance.
   * 
   * @example
   * coop-line-001
   */
  line?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfos: 'EipInfos',
      instanceId: 'InstanceId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfos: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos },
      instanceId: 'string',
      line: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipInfos)) {
      $dara.Model.validateArray(this.eipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address and ISP line information about the Anti-DDoS Proxy instance.
   */
  instanceDetails?: DescribeInstanceDetailsResponseBodyInstanceDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C814429-21A5-4673-827E-FDD19DC75681
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetails: 'InstanceDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

