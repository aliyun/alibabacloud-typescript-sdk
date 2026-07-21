// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content associated with the event.
   * 
   * @example
   * 春天里常见的景
   */
  content?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * message
   */
  event?: string;
  /**
   * @remarks
   * The unique ID for the request. This ID is useful for troubleshooting.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

