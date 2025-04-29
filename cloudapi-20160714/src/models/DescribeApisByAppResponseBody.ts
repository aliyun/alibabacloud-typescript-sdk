// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByAppResponseBodyAppApiRelationInfos } from "./DescribeApisByAppResponseBodyAppApiRelationInfos";


export class DescribeApisByAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API authorizations.
   */
  appApiRelationInfos?: DescribeApisByAppResponseBodyAppApiRelationInfos;
  /**
   * @remarks
   * The number of pages to return the results on.
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
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfos: 'AppApiRelationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfos: DescribeApisByAppResponseBodyAppApiRelationInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.appApiRelationInfos && typeof (this.appApiRelationInfos as any).validate === 'function') {
      (this.appApiRelationInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

