// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos } from "./DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos";


export class DescribeApisWithStageNameIntegratedByAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization information of the API.
   */
  appApiRelationInfos?: DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos;
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
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
      appApiRelationInfos: DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos,
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

