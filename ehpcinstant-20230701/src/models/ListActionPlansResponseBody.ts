// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlansResponseBodyActionPlans extends $dara.Model {
  /**
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @example
   * TestActionPlan
   */
  actionPlanName?: string;
  /**
   * @example
   * 2025-08-10 17:58:24
   */
  createTime?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * 2025-08-10 17:58:24
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
      actionPlanName: 'ActionPlanName',
      createTime: 'CreateTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
      actionPlanName: 'string',
      createTime: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionPlansResponseBody extends $dara.Model {
  actionPlans?: ListActionPlansResponseBodyActionPlans[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      actionPlans: 'ActionPlans',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlans: { 'type': 'array', 'itemType': ListActionPlansResponseBodyActionPlans },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionPlans)) {
      $dara.Model.validateArray(this.actionPlans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

