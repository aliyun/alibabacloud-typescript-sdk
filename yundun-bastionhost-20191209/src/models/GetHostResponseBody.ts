// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostResponseBodyHostProtocols extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the host. This parameter uniquely identifies a host. A value is returned for this parameter only if you have performed O\\&M operations on the host by using the bastion host. Otherwise, no value is returned.
   * 
   * @example
   * ssh-ed25519|3e:46:5a:e1:1f:0d:39:7e:61:35:d5:fa:7b:2b:**:**
   */
  hostFingerPrint?: string;
  /**
   * @remarks
   * The service port of the host.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The protocol that is used to connect to the host. Valid values:
   * 
   * *   **SSH**
   * *   **RDP**
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostFingerPrint: 'HostFingerPrint',
      port: 'Port',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostFingerPrint: 'string',
      port: 'number',
      protocolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBodyHost extends $dara.Model {
  /**
   * @remarks
   * The address type of the host. Valid values:
   * 
   * *   **Public**: a public address
   * *   **Private**: a private address
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The description of the host.
   * 
   * @example
   * host
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * host
   */
  hostName?: string;
  /**
   * @remarks
   * The internal endpoint of the host. The value is a domain name or an IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public address of the host. The value is a domain name or an IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The ID of the network domain to which the host belongs.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The operating system of the host. Valid values:
   * 
   * *   **Linux**
   * *   **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The preferred key exchange algorithm of the host. The value of this parameter is returned if OSType is set to Linux. Valid values:
   * 
   * *   **default**
   * *   **diffie-hellman-group1-sha1**
   * *   **diffie-hellman-group14-sha1**
   * *   **diffie-hellman-group-exchange-sha1**
   * 
   * @example
   * default
   */
  prefKex?: string;
  /**
   * @remarks
   * The protocol information about the host.
   */
  protocols?: GetHostResponseBodyHostProtocols[];
  /**
   * @remarks
   * The source of the host. Valid values:
   * 
   * *   **Local**: a host in a data center
   * *   **Ecs**: an Elastic Compute Service (ECS) instance
   * *   **Rds**: a host in an ApsaraDB MyBase dedicated cluster
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the ECS instance or the host in an ApsaraDB MyBase dedicated cluster.
   * 
   * >  If **Local** is returned for the **Source** parameter, no value is returned for this parameter.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The status of the host. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Release**: released
   * 
   * @example
   * Normal
   */
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      networkDomainId: 'NetworkDomainId',
      OSType: 'OSType',
      prefKex: 'PrefKex',
      protocols: 'Protocols',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      networkDomainId: 'string',
      OSType: 'string',
      prefKex: 'string',
      protocols: { 'type': 'array', 'itemType': GetHostResponseBodyHostProtocols },
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the host.
   */
  host?: GetHostResponseBodyHost;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: GetHostResponseBodyHost,
      requestId: 'string',
    };
  }

  validate() {
    if(this.host && typeof (this.host as any).validate === 'function') {
      (this.host as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

