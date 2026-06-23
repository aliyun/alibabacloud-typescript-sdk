// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostsForUserGroupResponseBodyHosts extends $dara.Model {
  /**
   * @remarks
   * The address type of the host. Valid values:
   * 
   * - **Public**: a public IP address
   * 
   * - **Private**: a private IP address
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
   * host1
   */
  hostName?: string;
  /**
   * @remarks
   * The private IP address of the host. This can be a domain name or an IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public IP address of the host. This can be a domain name or an IP address.
   * 
   * @example
   * 10.158.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The OS type of the host. Valid values:
   * 
   * - **Linux**
   * 
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of hosts.
   */
  hosts?: ListHostsForUserGroupResponseBodyHosts[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of hosts.
   * 
   * @example
   * 10
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
      hosts: { 'type': 'array', 'itemType': ListHostsForUserGroupResponseBodyHosts },
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

