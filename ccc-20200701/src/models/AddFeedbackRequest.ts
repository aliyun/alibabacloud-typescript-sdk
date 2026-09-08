// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * The feedback provided by returning users.
   * 
   * @example
   * {"问题描述":"客户询问沙发生产周期并尝试加快", "客服方案":"订单确认，建议联系在线客服", "完成度判断":"否"}
   */
  feedback?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Rating:
   * 
   * - thumbsDown: Thumbs down.
   * 
   * - thumbsUp: Thumbs up.
   * 
   * @example
   * thumbsUp
   */
  rating?: number;
  /**
   * @remarks
   * AI task ID.
   * 
   * @example
   * f780ade8-****-458b-b067-63077946a570
   */
  taskId?: string;
  /**
   * @remarks
   * Task type.
   * 
   * - Abstract:fields (Field extraction)
   * 
   * - Abstract:keywords (Hot keywords)
   * 
   * - Abstract:title_summary (Summary)
   * 
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

