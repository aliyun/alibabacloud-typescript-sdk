// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateQualityProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisIds?: number[];
  channelTouchType?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  checkFreqType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  timeRangeEnd?: string;
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

