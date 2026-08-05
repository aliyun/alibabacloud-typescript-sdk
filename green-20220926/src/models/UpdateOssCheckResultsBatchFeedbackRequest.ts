// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsBatchFeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * misreport
   */
  feedback?: string;
  /**
   * @remarks
   * The result items.
   * 
   * @example
   * []
   */
  items?: string;
  /**
   * @remarks
   * The ID of the parent task.
   * 
   * @example
   * P_XHDUS
   */
  parentTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      items: 'Items',
      parentTaskId: 'ParentTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      items: 'string',
      parentTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

