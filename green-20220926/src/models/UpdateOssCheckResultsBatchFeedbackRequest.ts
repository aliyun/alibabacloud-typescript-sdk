// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsBatchFeedbackRequest extends $dara.Model {
  /**
   * @example
   * misreport
   */
  feedback?: string;
  /**
   * @example
   * []
   */
  items?: string;
  /**
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

