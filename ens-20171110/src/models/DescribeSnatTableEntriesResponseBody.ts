// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatTableEntriesResponseBodySnatTableEntries extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable EIP affinity. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * **
   * 
   * **Description** After you enable EIP affinity, if multiple EIPs are associated with an SNAT entry, each client uses one EIP to access the Internet. If EIP affinity is disabled, each client uses a random EIP to access the Internet.
   * 
   * @example
   * false
   */
  eipAffinity?: boolean;
  /**
   * @remarks
   * The timeout period for idle connections. Valid values: **1** to **86400**. Unit: seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Whether to enable operator affinity. Value taking:
   * 
   * - false:Do not open.
   * 
   * - true:Open.
   * 
   * @example
   * true
   */
  ispAffinity?: boolean;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * @example
   * snat-5tfjp3537mi6iokl59g5c****
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
   * The EIP specified in the SNAT entry.
   * 
   * @example
   * 120.XXX.XXX.71
   */
  snatIp?: string;
  /**
   * @remarks
   * The source CIDR block specified in the SNAT entry.
   * 
   * @example
   * 10.0.0.13/32
   */
  sourceCIDR?: string;
  /**
   * @remarks
   * The secondary EIP. Multiple EIPs are separated by commas (,).
   * 
   * @example
   * 101.XXX.XXX.7
   */
  standbySnatIp?: string;
  /**
   * @remarks
   * The status of the secondary EIP. Valid values:
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
   * The status of the SNAT entry. Valid values:
   * 
   * *   Pending: The SNAT entry is being created or modified.
   * *   Available: The SNAT entry is available.
   * *   Deleting: The SNAT entry is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eipAffinity: 'EipAffinity',
      idleTimeout: 'IdleTimeout',
      ispAffinity: 'IspAffinity',
      natGatewayId: 'NatGatewayId',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      sourceCIDR: 'SourceCIDR',
      standbySnatIp: 'StandbySnatIp',
      standbyStatus: 'StandbyStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAffinity: 'boolean',
      idleTimeout: 'number',
      ispAffinity: 'boolean',
      natGatewayId: 'string',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      sourceCIDR: 'string',
      standbySnatIp: 'string',
      standbyStatus: 'string',
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

export class DescribeSnatTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The details of the SNAT entries.
   */
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries[];
  /**
   * @remarks
   * The number of SNAT entries that are returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snatTableEntries: 'SnatTableEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snatTableEntries: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntries },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snatTableEntries)) {
      $dara.Model.validateArray(this.snatTableEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

