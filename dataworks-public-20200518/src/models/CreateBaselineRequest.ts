// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateBaselineRequestOvertimeSettings extends $dara.Model {
  /**
   * @remarks
   * The cycle that corresponds to the committed completion time. For a day-level baseline, set this parameter to 1. For an hour-level baseline, set this parameter to a value that is no more than 24.
   * 
   * @example
   * 1
   */
  cycle?: number;
  /**
   * @remarks
   * The committed completion time in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * The alert margin threshold of the baseline. Unit: minutes.
   * 
   * @example
   * 30
   */
  alertMarginThreshold?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * BaselineName
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY.
   * 
   * This parameter is required.
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * The ancestor nodes of nodes in the baseline.
   * 
   * @example
   * 210001233239,210001236482
   */
  nodeIds?: string;
  /**
   * @remarks
   * The settings of the committed completion time of the baseline.
   * 
   * This parameter is required.
   */
  overtimeSettings?: CreateBaselineRequestOvertimeSettings[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,3,5,7,8
   */
  priority?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      alertMarginThreshold: 'AlertMarginThreshold',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      nodeIds: 'NodeIds',
      overtimeSettings: 'OvertimeSettings',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMarginThreshold: 'number',
      baselineName: 'string',
      baselineType: 'string',
      nodeIds: 'string',
      overtimeSettings: { 'type': 'array', 'itemType': CreateBaselineRequestOvertimeSettings },
      owner: 'string',
      priority: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.overtimeSettings)) {
      $dara.Model.validateArray(this.overtimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

