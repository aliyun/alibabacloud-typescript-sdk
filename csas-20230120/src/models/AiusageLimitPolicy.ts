// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIUsageLimitPolicy extends $dara.Model {
  /**
   * @remarks
   * A brief description of the policy\\"s purpose or scope.
   */
  description?: string;
  /**
   * @remarks
   * The timestamp (in UTC) when the policy was created, formatted as `YYYY-MM-DDThh:mm:ssZ`. This is a system-generated, read-only property.
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp (in UTC) when the policy was last modified, formatted as `YYYY-MM-DDThh:mm:ssZ`. This is a system-generated, read-only property.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier for the usage limit policy. This is a system-generated, read-only value.
   */
  limitPolicyId?: string;
  /**
   * @remarks
   * The maximum value for the specified `MetricType` allowed within the `ResetPeriod`. Once this limit is reached, further requests are throttled or rejected.
   */
  limitValue?: number;
  /**
   * @remarks
   * The type of metric the limit applies to, such as the number of API requests, tokens processed, or compute units consumed.
   */
  metricType?: string;
  /**
   * @remarks
   * A user-friendly name for the policy. This helps you identify the policy in a list.
   */
  name?: string;
  /**
   * @remarks
   * The priority of the policy, used to determine the evaluation order when multiple policies apply to the same request. A lower number indicates a higher priority.
   */
  priority?: number;
  /**
   * @remarks
   * The time window during which the usage count is accumulated before it resets. For example: `Hour`, `Day`, or `Month`.
   */
  resetPeriod?: string;
  /**
   * @remarks
   * A list of service IDs that this policy applies to. The policy is enforced only for requests made to these services.
   */
  serviceIds?: string[];
  /**
   * @remarks
   * The status of the policy. Valid values are `Enabled` and `Disabled`. A disabled policy is not enforced.
   */
  status?: string;
  /**
   * @remarks
   * A list of user group IDs that this policy applies to. The policy is enforced only for users who belong to these groups.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      limitPolicyId: 'LimitPolicyId',
      limitValue: 'LimitValue',
      metricType: 'MetricType',
      name: 'Name',
      priority: 'Priority',
      resetPeriod: 'ResetPeriod',
      serviceIds: 'ServiceIds',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      limitPolicyId: 'string',
      limitValue: 'number',
      metricType: 'string',
      name: 'string',
      priority: 'number',
      resetPeriod: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

