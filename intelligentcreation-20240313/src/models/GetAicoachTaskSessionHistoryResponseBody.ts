// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionHistoryResponseBodyConversationList extends $dara.Model {
  audioUrl?: string;
  dateLabel?: string;
  evaluationFeedback?: string;
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

export class GetAICoachTaskSessionHistoryResponseBody extends $dara.Model {
  conversationList?: GetAICoachTaskSessionHistoryResponseBodyConversationList[];
  duration?: number;
  endTime?: string;
  pauseDuration?: number;
  requestId?: string;
  scriptName?: string;
  startTime?: string;
  status?: string;
  total?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      duration: 'duration',
      endTime: 'endTime',
      pauseDuration: 'pauseDuration',
      requestId: 'requestId',
      scriptName: 'scriptName',
      startTime: 'startTime',
      status: 'status',
      total: 'total',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: { 'type': 'array', 'itemType': GetAICoachTaskSessionHistoryResponseBodyConversationList },
      duration: 'number',
      endTime: 'string',
      pauseDuration: 'number',
      requestId: 'string',
      scriptName: 'string',
      startTime: 'string',
      status: 'string',
      total: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversationList)) {
      $dara.Model.validateArray(this.conversationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

