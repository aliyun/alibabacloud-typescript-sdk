// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDomainByParamResponseBodyData } from "./QueryDomainByParamResponseBodyData";


export class QueryDomainByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8C90CCD3-627C-4F87-AD8C-2F03146071EB
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * List of domains
   */
  data?: QueryDomainByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryDomainByParamResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

