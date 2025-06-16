// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries } from "./DescribeIpv6translatorEntriesResponseBodyIpv6translatorEntries";


export class DescribeIPv6TranslatorEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv6 mapping entries that are queried.
   */
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

