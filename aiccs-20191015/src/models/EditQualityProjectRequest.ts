// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditQualityProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  channelTouchType?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  checkFreqType?: number;
  depList?: number[];
  groupList?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  scopeType?: number;
  servicerList?: string[];
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      scopeType: 'ScopeType',
      servicerList: 'ServicerList',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      projectId: 'number',
      projectName: 'string',
      projectVersion: 'number',
      scopeType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.depList)) {
      $dara.Model.validateArray(this.depList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.servicerList)) {
      $dara.Model.validateArray(this.servicerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

