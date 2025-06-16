// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorsResponseBodyIpv6Translators } from "./DescribeIpv6translatorsResponseBodyIpv6translators";


export class DescribeIPv6TranslatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IPv6 Translation Service instances.
   */
  ipv6Translators?: DescribeIPv6TranslatorsResponseBodyIpv6Translators;
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
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6Translators: 'Ipv6Translators',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Translators: DescribeIPv6TranslatorsResponseBodyIpv6Translators,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6Translators && typeof (this.ipv6Translators as any).validate === 'function') {
      (this.ipv6Translators as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

