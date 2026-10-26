// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline experiment.
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
   * The end date. Format: YYYY-MM-DD.
   * 
   * @example
   * 2021-07-01
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the experiment group. You can call the [ListExperimentGroups](https://help.aliyun.com/document_detail/2402573.html) operation to obtain the ID. This parameter is required for offline and real-time reports.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The list of experiment IDs. You can call the [ListExperiments](https://help.aliyun.com/document_detail/2402582.html) operation to obtain the IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 3,4,5
   */
  experimentIds?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The report type. Valid values:
   * - Realtime: real-time report
   * - Offline: offline report
   * - Market: dashboard report
   * 
   * This parameter is required.
   * 
   * @example
   * Offline
   */
  reportType?: string;
  /**
   * @remarks
   * The ID of the scene. You can call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain the ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The start date. Format: YYYY-MM-DD.
   * 
   * @example
   * 2021-07-01
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical time type. This parameter is required for real-time reports. Valid values:
   * - Hour: hourly statistics
   * - Day: cumulative statistics starting from 00:00 on the current day
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

