// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackDialogueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * test
   */
  customerResponse?: string;
  /**
   * @remarks
   * The generated content that is considered good.
   * 
   * @example
   * test
   */
  goodText?: string;
  /**
   * @remarks
   * The modified generated result.
   * 
   * @example
   * test
   */
  modifiedResponse?: string;
  /**
   * @remarks
   * thumbsDown: Dislike, thumbsUp: Like
   * 
   * @example
   * thumbsDown
   */
  rating?: string;
  /**
   * @remarks
   * The tags.
   */
  ratingTagsShrink?: string;
  /**
   * @remarks
   * The ID of a single-turn conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 75bf82fa-b71b-45d7-ae40-0b00e496cd9e
   */
  sessionId?: string;
  /**
   * @remarks
   * The ID of the page.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customerResponse: 'CustomerResponse',
      goodText: 'GoodText',
      modifiedResponse: 'ModifiedResponse',
      rating: 'Rating',
      ratingTagsShrink: 'RatingTags',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customerResponse: 'string',
      goodText: 'string',
      modifiedResponse: 'string',
      rating: 'string',
      ratingTagsShrink: 'string',
      sessionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

