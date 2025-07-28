// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCustomLinesResponseBodyCustomLinesCustomLineIpv4s extends $dara.Model {
  ipv4?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4)) {
      $dara.Model.validateArray(this.ipv4);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBodyCustomLinesCustomLine extends $dara.Model {
  /**
   * @remarks
   * The time when the custom line was created.
   * 
   * @example
   * 2022-12-27 18:16:38
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the custom line was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1671174074000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the creator for the custom line.
   * 
   * @example
   * 1851321989648462
   */
  creator?: string;
  /**
   * @remarks
   * The creator type. Valid values:
   * 
   * *   CUSTOM: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other types
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The role of the creator for the custom line. Valid values:
   * 
   * *   USER: user
   * *   SYSTEM: system
   * 
   * @example
   * USER
   */
  creatorType?: string;
  dnsCategory?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   */
  ipv4s?: SearchCustomLinesResponseBodyCustomLinesCustomLineIpv4s;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 11730
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The time when the custom line was updated.
   * 
   * @example
   * 2023-06-14 14:04:08
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the custom line was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672136518000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      dnsCategory: 'DnsCategory',
      ipv4s: 'Ipv4s',
      lineId: 'LineId',
      name: 'Name',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      dnsCategory: 'string',
      ipv4s: SearchCustomLinesResponseBodyCustomLinesCustomLineIpv4s,
      lineId: 'string',
      name: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.ipv4s && typeof (this.ipv4s as any).validate === 'function') {
      (this.ipv4s as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBodyCustomLines extends $dara.Model {
  customLine?: SearchCustomLinesResponseBodyCustomLinesCustomLine[];
  static names(): { [key: string]: string } {
    return {
      customLine: 'CustomLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLine: { 'type': 'array', 'itemType': SearchCustomLinesResponseBodyCustomLinesCustomLine },
    };
  }

  validate() {
    if(Array.isArray(this.customLine)) {
      $dara.Model.validateArray(this.customLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCustomLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom lines.
   */
  customLines?: SearchCustomLinesResponseBodyCustomLines;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
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
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      customLines: 'CustomLines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLines: SearchCustomLinesResponseBodyCustomLines,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.customLines && typeof (this.customLines as any).validate === 'function') {
      (this.customLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

