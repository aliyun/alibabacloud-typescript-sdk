// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskResultResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarStrategyTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeSoarStrategyTaskResultResponseBodyPageInfo;
  /**
   * @remarks
   * The execution records.
   */
  records?: string[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 1683940A-E4AE-4473-8C40-F4075434****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeSoarStrategyTaskResultResponseBodyPageInfo,
      records: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

