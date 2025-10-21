// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPlanExecutedStatus } from "./ScheduledPlanExecutedStatus";


export class ScheduledPlanExecutedInfo extends $dara.Model {
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
   * 0e6d3bab-2277-4ed1-b573-9de6413d****
   */
  jobResourceUpgradingId?: string;
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
   * SCHEDULED_PLAN
   */
  origin?: string;
  /**
   * @example
   * f8a2d5d9-9fc5-4273-bfcc-2a3cd354****
   */
  originJobId?: string;
  status?: ScheduledPlanExecutedStatus;
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
      jobResourceUpgradingId: 'jobResourceUpgradingId',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      origin: 'origin',
      originJobId: 'originJobId',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentId: 'string',
      jobResourceUpgradingId: 'string',
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      origin: 'string',
      originJobId: 'string',
      status: ScheduledPlanExecutedStatus,
      workspace: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

