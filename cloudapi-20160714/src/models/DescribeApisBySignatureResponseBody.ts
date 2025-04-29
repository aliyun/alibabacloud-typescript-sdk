// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisBySignatureResponseBodyApiInfos } from "./DescribeApisBySignatureResponseBodyApiInfos";


export class DescribeApisBySignatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiInfo data.
   */
  apiInfos?: DescribeApisBySignatureResponseBodyApiInfos;
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
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfos: 'ApiInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfos: DescribeApisBySignatureResponseBodyApiInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiInfos && typeof (this.apiInfos as any).validate === 'function') {
      (this.apiInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

