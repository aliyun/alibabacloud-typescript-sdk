// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditQualityProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The list of quality inspection rules.
   * 
   * This parameter is required.
   */
  analysisIds?: number[];
  /**
   * @remarks
   * The list of session channels.
   * 
   * This parameter is required.
   */
  channelTouchType?: number[];
  /**
   * @remarks
   * The check frequency type. Valid values:
   * - **1**: Periodic quality inspection.
   * - **4**: Temporary quality inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  checkFreqType?: number;
  /**
   * @remarks
   * The list of departments.
   */
  depList?: number[];
  /**
   * @remarks
   * The list of skill groups.
   */
  groupList?: number[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service instance ID. You can obtain the ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the quality inspection task.
   * 
   * This parameter is required.
   * 
   * @example
   * Automated quality inspection task
   */
  projectName?: string;
  /**
   * @remarks
   * The version of the quality inspection task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectVersion?: number;
  /**
   * @remarks
   * The quality inspection scope. Valid values:
   * 
   * - **1**: Instance (all skill groups).
   * - **2**: Department or skill group list.
   * - **3**: Customer service representative list.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  scopeType?: number;
  /**
   * @remarks
   * The list of customer service representatives.
   */
  servicerList?: string[];
  /**
   * @remarks
   * The end time of the temporary quality inspection session. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1619425576000
   */
  timeRangeEnd?: string;
  /**
   * @remarks
   * The start time of the temporary quality inspection session. The value is a timestamp in milliseconds.
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

