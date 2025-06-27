// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainGroupsResponseBodyDomainGroups } from "./DescribeDomainGroupsResponseBodyDomainGroups";


export class DescribeDomainGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name groups.
   */
  domainGroups?: DescribeDomainGroupsResponseBodyDomainGroups;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainGroups: 'DomainGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroups: DescribeDomainGroupsResponseBodyDomainGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainGroups && typeof (this.domainGroups as any).validate === 'function') {
      (this.domainGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

