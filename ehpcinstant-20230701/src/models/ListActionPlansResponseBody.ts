// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlansResponseBodyActionPlans extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution plan.
   * 
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @remarks
   * The name of the execution plan.
   * 
   * @example
   * TestActionPlan
   */
  actionPlanName?: string;
  /**
   * @remarks
   * The time when the execution plan was created.
   * 
   * @example
   * 2025-08-10 17:58:24
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the execution plan. The possible values are as follows:
   * 
   * *   Active Instant tasks are dynamically managed only when the execution plan is in the Active state.
   * *   Inactive Instant tasks are no longer managed by execution plans in the Inactive state.
   * *   Deleting: The execution plan is being deleted. You cannot modify the parameters of an execution plan in this state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The time when the execution plan was last modified. The time follows the ISO 8601 standard and UTC +0. The format is yyyy-MM-ddTHH:mmZ.
   * 
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
  /**
   * @remarks
   * The list of execution plan results.
   */
  actionPlans?: ListActionPlansResponseBodyActionPlans[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the read position returned by the current call. An empty value means all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Total data count under the current request conditions (optional; not returned by default).
   * 
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

