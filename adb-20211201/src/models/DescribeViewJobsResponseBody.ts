// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructRefreshJobModel } from "./OpenStructRefreshJobModel";


export class DescribeViewJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The refresh tasks.
   */
  mvRefreshJobModels?: OpenStructRefreshJobModel[];
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
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 44
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mvRefreshJobModels: 'MvRefreshJobModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mvRefreshJobModels: { 'type': 'array', 'itemType': OpenStructRefreshJobModel },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mvRefreshJobModels)) {
      $dara.Model.validateArray(this.mvRefreshJobModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeViewJobsResponseBodyData;
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
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A318054-6815-528A-AA94-8AC921******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 44
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeViewJobsResponseBodyData,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

