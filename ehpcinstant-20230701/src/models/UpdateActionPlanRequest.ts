// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateActionPlanRequest extends $dara.Model {
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
   * The expected scale of resources for the execution plan. If the ResourceType parameter is set to VcpuCapacity, the execution plan is expected to have 10000 vCPUs.
   * 
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Whether to enable the execution plan. Valid values:
   * 
   * *   true: enables the execution plan.
   * 
   * *   false: The execution plan is disabled.
   * 
   *     **
   * 
   *     **Note:** After an execution plan is disabled, the created Instant jobs are not automatically managed by the execution plan.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @example
   * 60
   */
  intervalMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
      desiredCapacity: 'DesiredCapacity',
      enabled: 'Enabled',
      intervalMinutes: 'IntervalMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
      desiredCapacity: 'number',
      enabled: 'string',
      intervalMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

