// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSyntheticTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The common parameters.
   */
  commonParamShrink?: string;
  /**
   * @remarks
   * The file download task.
   */
  downloadShrink?: string;
  /**
   * @remarks
   * The frequency.
   */
  extendIntervalShrink?: string;
  /**
   * @remarks
   * The interval at which synthetic monitoring is performed. Unit: minutes. Valid values:
   * 
   * *   1
   * *   5
   * *   10
   * *   15
   * *   20
   * *   30
   * *   60
   * *   120
   * *   180
   * *   240
   * *   360
   * *   480
   * *   720
   * *   1440
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  intervalTime?: string;
  /**
   * @remarks
   * The interval type.
   * 
   * *   0: daily
   * *   1: custom frequency
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  intervalType?: string;
  /**
   * @remarks
   * The IP address type:
   * 
   * *   0: an automatic IP address
   * *   1: IPv4
   * *   2: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * The list of monitoring points.
   * 
   * This parameter is required.
   */
  monitorListShrink?: string;
  /**
   * @remarks
   * The monitoring items that are associated with the browse tasks.
   */
  navigationShrink?: string;
  /**
   * @remarks
   * The network synthetic monitoring task.
   */
  netShrink?: string;
  /**
   * @remarks
   * The API performance synthetic monitoring task.
   */
  protocolShrink?: string;
  /**
   * @remarks
   * The ID of the region in which the application is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the task. To update a synthetic monitoring task, enter the task name and set the **UpdateTask** parameter to **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * Network synthetic monitoring task
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * 1.  3: web page performance - IE
   * 2.  34: web Page Performance - Chrome
   * 3.  0: network quality
   * 4.  40: file download
   * 5.  7:API performance
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @remarks
   * Specifies whether to update existing synthetic monitoring tasks.
   * 
   * *   true: updates existing synthetic monitoring tasks.
   * *   false: creates new synthetic monitoring tasks.
   * 
   * @example
   * false
   */
  updateTask?: boolean;
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commonParamShrink: 'CommonParam',
      downloadShrink: 'Download',
      extendIntervalShrink: 'ExtendInterval',
      intervalTime: 'IntervalTime',
      intervalType: 'IntervalType',
      ipType: 'IpType',
      monitorListShrink: 'MonitorList',
      navigationShrink: 'Navigation',
      netShrink: 'Net',
      protocolShrink: 'Protocol',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      updateTask: 'UpdateTask',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonParamShrink: 'string',
      downloadShrink: 'string',
      extendIntervalShrink: 'string',
      intervalTime: 'string',
      intervalType: 'string',
      ipType: 'number',
      monitorListShrink: 'string',
      navigationShrink: 'string',
      netShrink: 'string',
      protocolShrink: 'string',
      regionId: 'string',
      taskName: 'string',
      taskType: 'number',
      updateTask: 'boolean',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

