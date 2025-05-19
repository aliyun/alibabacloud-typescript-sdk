// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  baseExperimentId?: string;
  /**
   * @example
   * {"gender":"man"}
   */
  dimensionFields?: string;
  /**
   * @example
   * 2021-07-01
   */
  endDate?: string;
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3,4,5
   */
  experimentIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Offline
   */
  reportType?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 2021-07-01
   */
  startDate?: string;
  /**
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

