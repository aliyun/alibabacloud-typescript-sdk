// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsDomainNameListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain names.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries on the current page.
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
   * 822B9125-6E1A-551C-8EAF-6E7AE74****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of private DNS domain names.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainNameList: 'DomainNameList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainNameList)) {
      $dara.Model.validateArray(this.domainNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

