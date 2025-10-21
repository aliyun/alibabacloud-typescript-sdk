// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PeriodicSchedulingPolicy } from "./PeriodicSchedulingPolicy";


export class ScheduledPlan extends $dara.Model {
  /**
   * @example
   * 1723197248
   */
  createdAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  deploymentId?: string;
  /**
   * @example
   * 1723197248
   */
  modifiedAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @example
   * test-scheduled-plan
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * USER_DEFINED
   */
  origin?: string;
  periodicSchedulingPolicies?: PeriodicSchedulingPolicy[];
  /**
   * @example
   * f3b4ec1e-85dc-4b1d-9726-1d7f4c37****
   */
  scheduledPlanId?: string;
  /**
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * true
   */
  updatedByUser?: boolean;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentId: 'deploymentId',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      origin: 'origin',
      periodicSchedulingPolicies: 'periodicSchedulingPolicies',
      scheduledPlanId: 'scheduledPlanId',
      status: 'status',
      updatedByUser: 'updatedByUser',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentId: 'string',
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      origin: 'string',
      periodicSchedulingPolicies: { 'type': 'array', 'itemType': PeriodicSchedulingPolicy },
      scheduledPlanId: 'string',
      status: 'string',
      updatedByUser: 'boolean',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.periodicSchedulingPolicies)) {
      $dara.Model.validateArray(this.periodicSchedulingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

