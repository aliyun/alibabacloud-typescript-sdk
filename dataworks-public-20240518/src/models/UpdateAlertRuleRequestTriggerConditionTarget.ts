// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRuleRequestTriggerConditionTarget extends $dara.Model {
  /**
   * @remarks
   * The nodes that are not to be monitored.
   */
  allowTasks?: number[];
  /**
   * @remarks
   * The IDs of monitored objects.
   */
  ids?: number[];
  /**
   * @remarks
   * The type of the monitored objects. Valid values:
   * 
   * *   Task: node
   * *   Baseline: baseline
   * *   project: workspace
   * *   BizProcess: workflow
   * 
   * @example
   * Task
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowTasks: 'AllowTasks',
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowTasks: { 'type': 'array', 'itemType': 'number' },
      ids: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowTasks)) {
      $dara.Model.validateArray(this.allowTasks);
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

