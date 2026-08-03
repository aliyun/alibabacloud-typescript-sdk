// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachTaskSessionResponseBodySessionList extends $dara.Model {
  sessionCreateTime?: string;
  sessionDuration?: number;
  sessionId?: string;
  sessionStatus?: number;
  static names(): { [key: string]: string } {
    return {
      sessionCreateTime: 'sessionCreateTime',
      sessionDuration: 'sessionDuration',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionCreateTime: 'string',
      sessionDuration: 'number',
      sessionId: 'string',
      sessionStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachTaskSessionResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  sessionList?: ListAICoachTaskSessionResponseBodySessionList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      sessionList: 'sessionList',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sessionList: { 'type': 'array', 'itemType': ListAICoachTaskSessionResponseBodySessionList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.sessionList)) {
      $dara.Model.validateArray(this.sessionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

