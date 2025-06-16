// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls } from "./DescribeIpv6translatorAclListsResponseBodyIpv6translatorAcls";


export class DescribeIPv6TranslatorAclListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of network ACLs.
   */
  ipv6TranslatorAcls?: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls;
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
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorAcls: 'Ipv6TranslatorAcls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorAcls: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6TranslatorAcls && typeof (this.ipv6TranslatorAcls as any).validate === 'function') {
      (this.ipv6TranslatorAcls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

