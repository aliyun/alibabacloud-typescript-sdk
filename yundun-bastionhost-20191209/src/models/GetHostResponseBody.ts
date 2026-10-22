// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostResponseBodyHostProtocols extends $dara.Model {
  /**
   * @remarks
   * The host fingerprint information, which uniquely identifies a host. The bastion host records the host fingerprint only when you use the bastion host to perform O&M on the target host. Otherwise, this parameter is empty.
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
   * The protocol name used by the host. Valid values:
   * - **SSH**
   * - **RDP**
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
   * The host address type. Valid values:
   * - **Public**: public address.
   * - **Private**: private network address.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The remarks of the host.
   * 
   * @example
   * host
   */
  comment?: string;
  /**
   * @remarks
   * The host ID.
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
   * The private network address of the host, which can be a domain name or an IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public address of the host, which can be a domain name or an IP address.
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
   * - **Linux**
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The preferred key exchange algorithm configuration of the host. This parameter is returned only when OSType is Linux.
   * 
   * - **default**: default mode.
   * - **diffie-hellman-group1-sha1**: diffie-hellman-group1-sha1 algorithm compatibility mode.
   * - **diffie-hellman-group14-sha1**: diffie-hellman-group14-sha1 algorithm compatibility mode.
   * - **diffie-hellman-group-exchange-sha1**: diffie-hellman-group-exchange-sha1 algorithm compatibility mode.
   * 
   * @example
   * default
   */
  prefKex?: string;
  /**
   * @remarks
   * The protocol information of the host.
   */
  protocols?: GetHostResponseBodyHostProtocols[];
  /**
   * @remarks
   * The source of the host. Valid values:
   * - **Local**: local host.
   * - **Ecs**: ECS instance.
   * - **Rds**: ApsaraDB RDS dedicated cluster host.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ECS instance ID or dedicated cluster host ID that corresponds to the host.
   * > If **Source** is set to **Local**, this parameter is empty.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The host status. Valid values:
   * - **Normal**: Normal.
   * - **Release**: Released.
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
   * The information about the queried host.
   */
  host?: GetHostResponseBodyHost;
  /**
   * @remarks
   * The unique request ID generated by Alibaba Cloud for this request.
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

