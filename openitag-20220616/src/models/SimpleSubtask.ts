// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleSubtaskItems extends $dara.Model {
  /**
   * @remarks
   * Abandon flag.
   * 
   * @example
   * false
   */
  abandonFlag?: boolean;
  /**
   * @remarks
   * Abandonment remark.
   * 
   * @example
   * 原始数据有问题
   */
  abandonRemark?: string;
  /**
   * @remarks
   * Date ID.
   * 
   * @example
   * 175296157992643****
   */
  dataId?: string;
  /**
   * @remarks
   * Feedback flag.
   * 
   * @example
   * false
   */
  feedbackFlag?: boolean;
  /**
   * @remarks
   * Validation feedback.
   * 
   * @example
   * 验收完成
   */
  feedbackRemark?: string;
  /**
   * @remarks
   * Failed mark.
   * 
   * @example
   * false
   */
  fixedFlag?: boolean;
  /**
   * @remarks
   * Data item ID.
   * 
   * @example
   * 15116***94667356160
   * 
   * **if can be null:**
   * true
   */
  itemId?: number;
  /**
   * @remarks
   * Assigned to me:
   * - 0: Not assigned to me.
   * - 1: Assigned to me.
   * 
   * @example
   * 0
   */
  mine?: number;
  /**
   * @remarks
   * Skip flag.
   * 
   * @example
   * false
   */
  rejectFlag?: boolean;
  /**
   * @remarks
   * Status:
   * 
   * - INIT: Initial status.
   * - TOPUBLISH: Pending publish.
   * - CREATED: Created.
   * - HANDLING: In progress.
   * - VOTING: Voting in progress.
   * - FINISHED: Completed.
   * - FAIL: Failed.
   * - EXPIRE: Timeout.
   * - DISCARDED: Passively abandoned.
   * - DISABLE: Actively abandoned.
   * - LOCKED: Edit Lock.
   * - OFFLINE: Unpublished.
   * - MERGING: Merging results.
   * 
   * @example
   * HANDLING
   */
  state?: string;
  /**
   * @remarks
   * Weight.
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
      itemId: 'ItemId',
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
      itemId: 'number',
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

export class SimpleSubtask extends $dara.Model {
  /**
   * @remarks
   * List of items for subtasks.
   */
  items?: SimpleSubtaskItems[];
  /**
   * @remarks
   * Status.
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * Subtask ID.
   * 
   * @example
   * 1500***457270333440
   */
  subtaskId?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      status: 'Status',
      subtaskId: 'SubtaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': SimpleSubtaskItems },
      status: 'string',
      subtaskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

