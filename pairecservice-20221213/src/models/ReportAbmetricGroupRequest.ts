// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the base experiment.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  baseExperimentId?: string;
  /**
   * @remarks
   * The dimension fields.
   * 
   * @example
   * {"gender":"man"}
   */
  dimensionFields?: string;
  /**
   * @remarks
   * The end date.
   * 
   * @example
   * 2021-07-01
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the experiment group. You can call the [ListExperimentGroups](https://help.aliyun.com/document_detail/2402573.html) operation to obtain the ID of the experiment group. This parameter is required for offline and real-time reports.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The IDs of the experiments. You can call the [ListExperiments](https://help.aliyun.com/document_detail/2402582.html) operation to obtain the IDs of the experiments.
   * 
   * This parameter is required.
   * 
   * @example
   * 3,4,5
   */
  experimentIds?: string;
  /**
   * @remarks
   * The instance ID. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the report.
   * 
   * - Realtime: real-time report.
   * 
   * - Offline: offline report.
   * 
   * - Market: dashboard report.
   * 
   * This parameter is required.
   * 
   * @example
   * Offline
   */
  reportType?: string;
  /**
   * @remarks
   * The ID of the scene. You can call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain the scene ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The start date.
   * 
   * @example
   * 2021-07-01
   */
  startDate?: string;
  /**
   * @remarks
   * The time statistics method. This parameter is required for real-time reports.
   * 
   * - Hour: The statistics are collected by hour.
   * 
   * - Day: The statistics are accumulated from 00:00 on the current day.
   * 
   * @example
   * Hour
   */
  timeStatisticsMethod?: string;
  static names(): { [key: string]: string } {
    return {
      baseExperimentId: 'BaseExperimentId',
      dimensionFields: 'DimensionFields',
      endDate: 'EndDate',
      experimentGroupId: 'ExperimentGroupId',
      experimentIds: 'ExperimentIds',
      instanceId: 'InstanceId',
      reportType: 'ReportType',
      sceneId: 'SceneId',
      startDate: 'StartDate',
      timeStatisticsMethod: 'TimeStatisticsMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseExperimentId: 'string',
      dimensionFields: 'string',
      endDate: 'string',
      experimentGroupId: 'string',
      experimentIds: 'string',
      instanceId: 'string',
      reportType: 'string',
      sceneId: 'string',
      startDate: 'string',
      timeStatisticsMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

