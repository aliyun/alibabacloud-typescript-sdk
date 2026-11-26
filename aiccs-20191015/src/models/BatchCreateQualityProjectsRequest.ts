// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateQualityProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of quality check rules.
   * 
   * This parameter is required.
   */
  analysisIds?: number[];
  /**
   * @remarks
   * The list of session channels.
   */
  channelTouchType?: number[];
  /**
   * @remarks
   * The check frequency type. Valid values:
   * 
   * - **1**: periodic quality check
   * - **4**: ad-hoc quality check
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  checkFreqType?: number;
  /**
   * @remarks
   * The list of instances.
   * 
   * This parameter is required.
   */
  instanceList?: string[];
  /**
   * @remarks
   * The name of the quality check task.
   * 
   * This parameter is required.
   * 
   * @example
   * Automated quality check task
   */
  projectName?: string;
  /**
   * @remarks
   * The end time of the ad-hoc quality check session. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1619425576000
   */
  timeRangeEnd?: string;
  /**
   * @remarks
   * The start time of the ad-hoc quality check session. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1619424556000
   */
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      instanceList: 'InstanceList',
      projectName: 'ProjectName',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      projectName: 'string',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisIds)) {
      $dara.Model.validateArray(this.analysisIds);
    }
    if(Array.isArray(this.channelTouchType)) {
      $dara.Model.validateArray(this.channelTouchType);
    }
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

