// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFeedbackRequest extends $dara.Model {
  feedback?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * thumbsUp
   */
  rating?: number;
  /**
   * @example
   * f780ade8-****-458b-b067-63077946a570
   */
  taskId?: string;
  /**
   * @example
   * Abstract:fields
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      instanceId: 'InstanceId',
      rating: 'Rating',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      instanceId: 'string',
      rating: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

