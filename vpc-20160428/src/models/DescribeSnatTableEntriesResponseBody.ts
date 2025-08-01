// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry extends $dara.Model {
  eipAffinity?: string;
  /**
   * @remarks
   * The ID of the NAT gateway to which the SNAT entry belongs.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * @example
   * snat-kmd6nv8fy****
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The name of the SNAT entry.
   * 
   * @example
   * SnatEntry-1
   */
  snatEntryName?: string;
  /**
   * @remarks
   * *   When you query SNAT entries of Internet NAT gateways, this parameter indicates the EIP in an SNAT entry.
   * *   When you query SNAT entries of VPC NAT gateways, this parameter indicates the NAT IP address in an SNAT entry.
   * 
   * @example
   * 116.22.XX.XX
   */
  snatIp?: string;
  /**
   * @remarks
   * The ID of the SNAT table to which the SNAT entry belongs.
   * 
   * @example
   * stb-gz3r3odawdgffde****
   */
  snatTableId?: string;
  /**
   * @remarks
   * The source CIDR block specified in the SNAT entry.
   * 
   * @example
   * 116.22.XX.XX/24
   */
  sourceCIDR?: string;
  /**
   * @remarks
   * *   When you query SNAT entries of Internet NAT gateways, this parameter indicates the ID of the vSwitch that uses SNAT to access the Internet.
   * *   When you query SNAT entries of VPC NAT gateways, this parameter indicates the ID of the vSwitch that uses SNAT to access external networks.
   * 
   * @example
   * vsw-3xbdsffvfgdfds****
   */
  sourceVSwitchId?: string;
  /**
   * @remarks
   * The status of the SNAT entry. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Deleting**
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eipAffinity: 'EipAffinity',
      natGatewayId: 'NatGatewayId',
      networkInterfaceId: 'NetworkInterfaceId',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatTableId: 'SnatTableId',
      sourceCIDR: 'SourceCIDR',
      sourceVSwitchId: 'SourceVSwitchId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAffinity: 'string',
      natGatewayId: 'string',
      networkInterfaceId: 'string',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      snatTableId: 'string',
      sourceCIDR: 'string',
      sourceVSwitchId: 'string',
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

export class DescribeSnatTableEntriesResponseBodySnatTableEntries extends $dara.Model {
  snatTableEntry?: DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry[];
  static names(): { [key: string]: string } {
    return {
      snatTableEntry: 'SnatTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableEntry: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry },
    };
  }

  validate() {
    if(Array.isArray(this.snatTableEntry)) {
      $dara.Model.validateArray(this.snatTableEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D7E89B1-1C5B-412B-8585-4908E222EED5
   */
  requestId?: string;
  /**
   * @remarks
   * Details of SNAT entries.
   */
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
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
      snatTableEntries: DescribeSnatTableEntriesResponseBodySnatTableEntries,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snatTableEntries && typeof (this.snatTableEntries as any).validate === 'function') {
      (this.snatTableEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

