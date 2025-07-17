// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTimingSyntheticTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of assertions.
   */
  availableAssertionsShrink?: string;
  /**
   * @remarks
   * The general settings.
   */
  commonSettingShrink?: string;
  /**
   * @remarks
   * The custom cycle.
   */
  customPeriodShrink?: string;
  /**
   * @remarks
   * The detection frequency. Valid values: 1m, 5m, 10m, 15m, 20m, 30m, 1h, 2h, 3h, 4h, 6h, 8h, 12h, and 24h.
   * 
   * @example
   * 5m
   */
  frequency?: string;
  /**
   * @remarks
   * The monitoring configurations.
   */
  monitorConfShrink?: string;
  /**
   * @remarks
   * The list of monitoring points.
   */
  monitorsShrink?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * AlibabaCloud DNS Task
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 5308a2691f59422c8c3b7aeccxxxxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAssertionsShrink: 'AvailableAssertions',
      commonSettingShrink: 'CommonSetting',
      customPeriodShrink: 'CustomPeriod',
      frequency: 'Frequency',
      monitorConfShrink: 'MonitorConf',
      monitorsShrink: 'Monitors',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAssertionsShrink: 'string',
      commonSettingShrink: 'string',
      customPeriodShrink: 'string',
      frequency: 'string',
      monitorConfShrink: 'string',
      monitorsShrink: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

