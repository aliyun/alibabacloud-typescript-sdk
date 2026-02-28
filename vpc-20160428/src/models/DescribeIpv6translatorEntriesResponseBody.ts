// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry extends $dara.Model {
  aclId?: string;
  aclStatus?: string;
  aclType?: string;
  allocateIpv6Addr?: string;
  allocateIpv6Port?: number;
  backendIpv4Addr?: string;
  backendIpv4Port?: string;
  entryBandwidth?: string;
  entryDescription?: string;
  entryName?: string;
  entryStatus?: string;
  ipv6TranslatorEntryId?: string;
  ipv6TranslatorId?: string;
  regionId?: string;
  transProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      allocateIpv6Port: 'AllocateIpv6Port',
      backendIpv4Addr: 'BackendIpv4Addr',
      backendIpv4Port: 'BackendIpv4Port',
      entryBandwidth: 'EntryBandwidth',
      entryDescription: 'EntryDescription',
      entryName: 'EntryName',
      entryStatus: 'EntryStatus',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      regionId: 'RegionId',
      transProtocol: 'TransProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      allocateIpv6Addr: 'string',
      allocateIpv6Port: 'number',
      backendIpv4Addr: 'string',
      backendIpv4Port: 'string',
      entryBandwidth: 'string',
      entryDescription: 'string',
      entryName: 'string',
      entryStatus: 'string',
      ipv6TranslatorEntryId: 'string',
      ipv6TranslatorId: 'string',
      regionId: 'string',
      transProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries extends $dara.Model {
  ipv6TranslatorEntry?: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry[];
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntry: 'Ipv6TranslatorEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntry: { 'type': 'array', 'itemType': DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6TranslatorEntry)) {
      $dara.Model.validateArray(this.ipv6TranslatorEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesResponseBody extends $dara.Model {
  ipv6TranslatorEntries?: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntries: 'Ipv6TranslatorEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntries: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6TranslatorEntries && typeof (this.ipv6TranslatorEntries as any).validate === 'function') {
      (this.ipv6TranslatorEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

