// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackDialogueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  /**
   * @example
   * test
   */
  customerResponse?: string;
  /**
   * @example
   * test
   */
  goodText?: string;
  /**
   * @example
   * test
   */
  modifiedResponse?: string;
  /**
   * @example
   * thumbsDown
   */
  rating?: string;
  ratingTagsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75bf82fa-b71b-45d7-ae40-0b00e496cd9e
   */
  sessionId?: string;
  /**
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

