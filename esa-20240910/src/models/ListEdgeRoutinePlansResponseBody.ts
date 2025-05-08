// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEdgeRoutinePlansResponseBodyPlanInfo } from "./ListEdgeRoutinePlansResponseBodyPlanInfo";


export class ListEdgeRoutinePlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The plans.
   */
  planInfo?: ListEdgeRoutinePlansResponseBodyPlanInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planInfo: 'PlanInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planInfo: { 'type': 'array', 'itemType': ListEdgeRoutinePlansResponseBodyPlanInfo },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.planInfo)) {
      $dara.Model.validateArray(this.planInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

