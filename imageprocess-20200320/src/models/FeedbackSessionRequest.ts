// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  feedback?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 69675e9ddaea4b1ca8b9ddbafd02edc2
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

