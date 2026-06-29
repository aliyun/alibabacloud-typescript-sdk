// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Workforce } from "./Workforce";


export class SubtaskDetailItems extends $dara.Model {
  /**
   * @remarks
   * Abandon mark
   * 
   * @example
   * False
   */
  abandonFlag?: boolean;
  /**
   * @remarks
   * discard reason
   * 
   * @example
   * 原始数据错误
   */
  abandonRemark?: string;
  /**
   * @remarks
   * Date ID
   * 
   * @example
   * 1957578084
   */
  dataId?: string;
  /**
   * @remarks
   * feedback mark
   * 
   * @example
   * False
   */
  feedbackFlag?: boolean;
  /**
   * @remarks
   * Validate feedback
   * 
   * @example
   * 标注内容合格
   */
  feedbackRemark?: string;
  /**
   * @remarks
   * Failed mark
   * 
   * @example
   * False
   */
  fixedFlag?: boolean;
  /**
   * @remarks
   * Is assigned to me
   * 
   * @example
   * 0
   */
  mine?: number;
  /**
   * @remarks
   * skip mark
   * 
   * @example
   * False
   */
  rejectFlag?: boolean;
  /**
   * @remarks
   * status
   * 
   * @example
   * HANDLING
   */
  state?: string;
  /**
   * @remarks
   * Weight
   * 
   * @example
   * 311011
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      abandonFlag: 'AbandonFlag',
      abandonRemark: 'AbandonRemark',
      dataId: 'DataId',
      feedbackFlag: 'FeedbackFlag',
      feedbackRemark: 'FeedbackRemark',
      fixedFlag: 'FixedFlag',
      mine: 'Mine',
      rejectFlag: 'RejectFlag',
      state: 'State',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonFlag: 'boolean',
      abandonRemark: 'string',
      dataId: 'string',
      feedbackFlag: 'boolean',
      feedbackRemark: 'string',
      fixedFlag: 'boolean',
      mine: 'number',
      rejectFlag: 'boolean',
      state: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtaskDetail extends $dara.Model {
  /**
   * @remarks
   * is discardable
   * 
   * @example
   * false
   */
  canDiscard?: boolean;
  /**
   * @remarks
   * Can assign
   * 
   * @example
   * false
   */
  canReassign?: boolean;
  /**
   * @remarks
   * is releasable
   * 
   * @example
   * false
   */
  canRelease?: boolean;
  /**
   * @remarks
   * current File Type
   * 
   * @example
   * MARK
   */
  currentWorkNode?: string;
  /**
   * @remarks
   * extra parameters
   * 
   * @example
   * null
   * 
   * **if can be null:**
   * true
   */
  extConfigs?: string;
  /**
   * @remarks
   * List of items in the sub-job
   */
  items?: SubtaskDetailItems[];
  /**
   * @remarks
   * status
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * Subtask ID
   * 
   * @example
   * 1500***457270333440
   */
  subtaskId?: string;
  /**
   * @remarks
   * parent job ID of the sub-job
   * 
   * @example
   * 1511***994667356160
   */
  taskId?: string;
  /**
   * @remarks
   * Job weight
   * 
   * @example
   * 631548
   */
  weight?: number;
  /**
   * @remarks
   * Current edge zone status
   * 
   * @example
   * FINISHED
   */
  workNodeState?: string;
  /**
   * @remarks
   * list of annotators assigned to the sub-job
   */
  workforce?: Workforce[];
  static names(): { [key: string]: string } {
    return {
      canDiscard: 'CanDiscard',
      canReassign: 'CanReassign',
      canRelease: 'CanRelease',
      currentWorkNode: 'CurrentWorkNode',
      extConfigs: 'ExtConfigs',
      items: 'Items',
      status: 'Status',
      subtaskId: 'SubtaskId',
      taskId: 'TaskId',
      weight: 'Weight',
      workNodeState: 'WorkNodeState',
      workforce: 'Workforce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDiscard: 'boolean',
      canReassign: 'boolean',
      canRelease: 'boolean',
      currentWorkNode: 'string',
      extConfigs: 'string',
      items: { 'type': 'array', 'itemType': SubtaskDetailItems },
      status: 'string',
      subtaskId: 'string',
      taskId: 'string',
      weight: 'number',
      workNodeState: 'string',
      workforce: { 'type': 'array', 'itemType': Workforce },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.workforce)) {
      $dara.Model.validateArray(this.workforce);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

