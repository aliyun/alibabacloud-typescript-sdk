// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlanMaintenanceWindowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the maintenance window.
   * 
   * - **true**: Enables the maintenance window.
   * 
   * - **false**: Disables the maintenance window.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  minMaintenanceInterval?: number;
  /**
   * @remarks
   * The name of the maintenance window. The name can be up to 200 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * WIndowName
   */
  planWindowName?: string;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maintenance operation supported by the maintenance window.
   * 
   * This parameter is required.
   * 
   * @example
   * Reboot
   */
  supportMaintenanceAction?: string;
  /**
   * @remarks
   * The resources to which the maintenance window applies.
   * 
   * This parameter is required.
   */
  targetResourceShrink?: string;
  /**
   * @remarks
   * The recurring schedule for the maintenance window.
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

