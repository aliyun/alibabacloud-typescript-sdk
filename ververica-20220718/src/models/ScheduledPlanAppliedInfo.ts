// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledPlanAppliedInfo extends $dara.Model {
  /**
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  deploymentId?: string;
  /**
   * @example
   * RUNNING
   */
  expectedState?: string;
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
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * f3b4ec1e-85dc-4b1d-9726-1d7f4c37****
   */
  scheduledPlanId?: string;
  /**
   * @example
   * test-scheduled-plan
   */
  scheduledPlanName?: string;
  /**
   * @example
   * WAITING
   */
  statusState?: string;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      expectedState: 'expectedState',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      namespace: 'namespace',
      scheduledPlanId: 'scheduledPlanId',
      scheduledPlanName: 'scheduledPlanName',
      statusState: 'statusState',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      expectedState: 'string',
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      namespace: 'string',
      scheduledPlanId: 'string',
      scheduledPlanName: 'string',
      statusState: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

