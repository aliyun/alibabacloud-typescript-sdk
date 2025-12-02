// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMVRecommendResultModel } from "./OpenStructMvrecommendResultModel";


export class DescribeMVRecommendResultsResponseBodyData extends $dara.Model {
  mvRecommendResultModels?: OpenStructMVRecommendResultModel[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * *   **30** (default).
   * *   **50**.
   * *   **100**.
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
      mvRecommendResultModels: 'MvRecommendResultModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mvRecommendResultModels: { 'type': 'array', 'itemType': OpenStructMVRecommendResultModel },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mvRecommendResultModels)) {
      $dara.Model.validateArray(this.mvRecommendResultModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMVRecommendResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeMVRecommendResultsResponseBodyData;
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
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeMVRecommendResultsResponseBodyData,
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

