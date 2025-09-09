// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHostsResponseBodyHosts extends $dara.Model {
  /**
   * @remarks
   * The address type of the host. Valid values:
   * 
   * *   **Public**
   * *   **Private**
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
   * comment
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
   * The host name.
   * 
   * @example
   * host1
   */
  hostName?: string;
  /**
   * @remarks
   * The private IP address of the host.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public IP address of the host.
   * 
   * @example
   * 10.158.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The host OS.
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
   * The host type. Valid values:
   * 
   * *   **Local**: on-premises host.
   * *   **Ecs**: Elastic Compute Service (ECS) instance.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The host status. Valid values:
   * 
   * *   **Normal**
   * *   **Release**
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

export class ListOperationHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hosts returned.
   */
  hosts?: ListOperationHostsResponseBodyHosts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F6C075F-FC86-476E-943B-097BD4E12948
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of hosts returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListOperationHostsResponseBodyHosts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

