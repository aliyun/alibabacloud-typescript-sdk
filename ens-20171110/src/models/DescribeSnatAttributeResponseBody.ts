// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatAttributeResponseBodySnatIps extends $dara.Model {
  /**
   * @remarks
   * The time when the IP address was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 203.132.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The status of the IP address.
   * 
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Starting
   * *   Releasing
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ip: 'Ip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ip: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the entry was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The destination CIDR block. The rule takes effect only on requests that access the destination CIDR block.
   * 
   * @example
   * 101.10. XX.XX/24
   */
  destCIDR?: string;
  /**
   * @remarks
   * Specifies whether to enable IP affinity. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * >  After you enable IP affinity, if multiple EIPs are associated with an SNAT entry, one client uses the same EIP to for communication. If IP affinity is disabled, the client uses a random EIP for communication.
   * 
   * @example
   * false
   */
  eipAffinity?: boolean;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 10
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Whether to enable operator affinity. Value taking:
   * - false:Do not open.
   * - true:Open.
   * 
   * @example
   * true
   */
  ispAffinity?: boolean;
  /**
   * @remarks
   * The ID of the Network Address Translation (NAT) gateway.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * @example
   * snat-5tfi6f8gds82mjmlofeym****
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The name of the SNAT entry.
   * 
   * @example
   * test0
   */
  snatEntryName?: string;
  /**
   * @remarks
   * The EIP specified in the SNAT entry. Multiple EIPs are separated by commas (,).
   * 
   * @example
   * 120.72.XX.XX
   */
  snatIp?: string;
  /**
   * @remarks
   * The information about the EIP specified in the SNAT entry.
   */
  snatIps?: DescribeSnatAttributeResponseBodySnatIps[];
  /**
   * @remarks
   * The source CIDR block specified in the SNAT entry.
   * 
   * @example
   * 10.0.XX.XX/24
   */
  sourceCIDR?: string;
  /**
   * @remarks
   * The secondary EIP specified in the SNAT entry. Multiple secondary EIPs are separated by commas (,).
   * 
   * @example
   * 101.23. XX.XX
   */
  standbySnatIp?: string;
  /**
   * @remarks
   * The status of the secondary EIP.
   * 
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Starting
   * 
   * @example
   * Stopped
   */
  standbyStatus?: string;
  /**
   * @remarks
   * The status of the SNAT entry.
   * 
   * *   Pending: The SNAT entry is being created or modified.
   * *   Available: The SNAT entry is available.
   * *   Deleting: The SNAT entry is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the NAT.
   * 
   * *   Empty: symmetric NAT.
   * *   FullCone: full cone NAT.
   * 
   * @example
   * FullCone
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      destCIDR: 'DestCIDR',
      eipAffinity: 'EipAffinity',
      idleTimeout: 'IdleTimeout',
      ispAffinity: 'IspAffinity',
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatIps: 'SnatIps',
      sourceCIDR: 'SourceCIDR',
      standbySnatIp: 'StandbySnatIp',
      standbyStatus: 'StandbyStatus',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      destCIDR: 'string',
      eipAffinity: 'boolean',
      idleTimeout: 'number',
      ispAffinity: 'boolean',
      natGatewayId: 'string',
      requestId: 'string',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      snatIps: { 'type': 'array', 'itemType': DescribeSnatAttributeResponseBodySnatIps },
      sourceCIDR: 'string',
      standbySnatIp: 'string',
      standbyStatus: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snatIps)) {
      $dara.Model.validateArray(this.snatIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

