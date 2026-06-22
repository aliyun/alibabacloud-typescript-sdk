// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotFeedbackRequest extends $dara.Model {
  comment?: string;
  feedback?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  sessionId?: string;
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      feedback: 'Feedback',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      turnId: 'TurnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      feedback: 'string',
      regionId: 'string',
      sessionId: 'string',
      turnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

