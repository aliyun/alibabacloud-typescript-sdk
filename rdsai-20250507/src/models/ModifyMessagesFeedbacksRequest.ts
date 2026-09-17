// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMessagesFeedbacksRequest extends $dara.Model {
  /**
   * @remarks
   * The feedback content.
   * 
   * @example
   * Unable to understand context; irrelevant answer
   */
  content?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * yy9rkn6q-js75-0dka-0cc2-6b5o86uj****
   */
  messageId?: string;
  /**
   * @remarks
   * The rating.
   * 
   * @example
   * like
   */
  rating?: string;
  /**
   * @remarks
   * The ContextDB workspace ID. Required only for ContextDB Manager App requests.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      messageId: 'MessageId',
      rating: 'Rating',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      messageId: 'string',
      rating: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

