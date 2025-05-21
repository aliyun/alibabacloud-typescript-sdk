// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionHistoryResponseBodyConversationList extends $dara.Model {
  audioUrl?: string;
  dateLabel?: string;
  evaluationFeedback?: string;
  /**
   * @example
   * {}
   */
  evaluationResult?: string;
  message?: string;
  recordId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'audioUrl',
      dateLabel: 'dateLabel',
      evaluationFeedback: 'evaluationFeedback',
      evaluationResult: 'evaluationResult',
      message: 'message',
      recordId: 'recordId',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      dateLabel: 'string',
      evaluationFeedback: 'string',
      evaluationResult: 'string',
      message: 'string',
      recordId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

