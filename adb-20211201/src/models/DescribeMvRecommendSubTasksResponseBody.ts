// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMvRecommendSubTaskModel } from "./OpenStructMvRecommendSubTaskModel";


export class DescribeMvRecommendSubTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of recommended tasks to be executed.
   */
  mvRecommendSubTaskModels?: OpenStructMvRecommendSubTaskModel[];
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
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mvRecommendSubTaskModels: 'MvRecommendSubTaskModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mvRecommendSubTaskModels: { 'type': 'array', 'itemType': OpenStructMvRecommendSubTaskModel },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mvRecommendSubTaskModels)) {
      $dara.Model.validateArray(this.mvRecommendSubTaskModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMvRecommendSubTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeMvRecommendSubTasksResponseBodyData;
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
   * 4
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
      data: DescribeMvRecommendSubTasksResponseBodyData,
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

