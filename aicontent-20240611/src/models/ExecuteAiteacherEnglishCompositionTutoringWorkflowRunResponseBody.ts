// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the event.
   * 
   * @example
   * hi
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
   * The unique ID of the request.
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

