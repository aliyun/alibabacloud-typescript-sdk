// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotFeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * The user feedback comment.
   * 
   * @example
   * good
   */
  comment?: string;
  /**
   * @remarks
   * The user satisfaction level. Valid values:
   * 
   * - 1: satisfied
   * - -1: not satisfied
   * - 0: cancel the evaluation
   * 
   * @example
   * 1
   */
  feedback?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * e356c91c-8220-425c-9d86-********
   */
  sessionId?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 5243231*****
   */
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

