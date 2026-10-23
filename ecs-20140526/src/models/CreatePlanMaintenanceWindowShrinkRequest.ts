// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlanMaintenanceWindowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the window. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The minimum interval between two scheduled O&M events for the same instance. Valid values: 1 to 48. Unit: hours.
   * 
   * @example
   * 24
   */
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The name of the O&M window. You can customize the name. The name can be up to 200 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The region ID. This parameter is required for Alibaba Cloud SDK routing. However, specifying any region ID for this operation yields the same result. The O&M window applies to all ECS instances across the network that meet the resource filtering conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The O&M operations supported by the O&M window.
   * 
   * This parameter is required.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources to which the O&M window applies.
   * 
   * This parameter is required.
   */
  targetResourceShrink?: string;
  /**
   * @remarks
   * The recurrence cycle of the window.
   * 
   * This parameter is required.
   */
  timePeriodShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      minMaintenanceInterval: 'MinMaintenanceInterval',
      planWindowName: 'PlanWindowName',
      regionId: 'RegionId',
      supportMaintenanceAction: 'SupportMaintenanceAction',
      targetResourceShrink: 'TargetResource',
      timePeriodShrink: 'TimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      minMaintenanceInterval: 'number',
      planWindowName: 'string',
      regionId: 'string',
      supportMaintenanceAction: 'string',
      targetResourceShrink: 'string',
      timePeriodShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

