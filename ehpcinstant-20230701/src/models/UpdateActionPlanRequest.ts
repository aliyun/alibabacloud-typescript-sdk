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
   * The expected resource scale of the execution plan. If ResourceType is set to VcpuCapacity, this field indicates that the execution plan expects to maintain 10,000 vCPUs.
   * 
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable the execution plan. Valid values:
   * 
   * - true: Enables the execution plan.
   * 
   * - false: Disables the execution plan.
   * >Notice: After the execution plan is disabled, already created Instant jobs are no longer automatically managed by the execution plan.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The scheduling interval of the execution plan. Unit: minutes. Valid values: 10 to 10080. Default value: 60.
   * 
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

