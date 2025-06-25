// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostsResponseBodyHosts extends $dara.Model {
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
   * The number of host accounts.
   * 
   * @example
   * 1
   */
  hostAccountCount?: number;
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
   * The name of the host.
   * 
   * @example
   * name
   */
  hostName?: string;
  /**
   * @remarks
   * The private address of the host. The value is a domain name or an IP address.
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
   * The source of the host. Valid values:
   * 
   * *   **Local**: a host in a data center
   * *   **Ecs**: an ECS instance
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
   * > No value is returned for this parameter if the **Source** parameter is set to **Local**.
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
      hostAccountCount: 'HostAccountCount',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostAccountCount: 'number',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      OSType: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

