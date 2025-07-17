// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTimingSyntheticTaskShrinkRequest extends $dara.Model {
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
   * The general settings.
   */
  customPeriodShrink?: string;
  /**
   * @remarks
   * The detection frequency. Valid values: 1m, 5m, 10m, 15m, 20m, 30m, 1h, 2h, 3h, 4h, 6h, 8h, 12h, and 24h.
   * 
   * This parameter is required.
   * 
   * @example
   * 5m
   */
  frequency?: string;
  /**
   * @remarks
   * The detection point type. Valid values:
   * 
   * - 1: PC
   * - 2: mobile device
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  monitorCategory?: number;
  /**
   * @remarks
   * The monitoring configurations.
   * 
   * This parameter is required.
   */
  monitorConfShrink?: string;
  /**
   * @remarks
   * The list of detection points.
   * 
   * This parameter is required.
   */
  monitorsShrink?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-test
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The parameter is optional.
   * 
   * @example
   * xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * 1: ICMP. 2: TCP. 3: DNS. 4: HTTP. 5: website speed measurement. 6: file download.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      availableAssertionsShrink: 'AvailableAssertions',
      commonSettingShrink: 'CommonSetting',
      customPeriodShrink: 'CustomPeriod',
      frequency: 'Frequency',
      monitorCategory: 'MonitorCategory',
      monitorConfShrink: 'MonitorConf',
      monitorsShrink: 'Monitors',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAssertionsShrink: 'string',
      commonSettingShrink: 'string',
      customPeriodShrink: 'string',
      frequency: 'string',
      monitorCategory: 'number',
      monitorConfShrink: 'string',
      monitorsShrink: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

