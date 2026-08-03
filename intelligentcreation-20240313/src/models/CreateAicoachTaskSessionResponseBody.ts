// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICoachTaskSessionResponseBodyScriptInfo extends $dara.Model {
  agentIconUrl?: string;
  characterName?: string;
  dialogueTextFlag?: boolean;
  dialogueTipFlag?: boolean;
  initiator?: string;
  inputTypeList?: string[];
  maxDuration?: number;
  scriptDesc?: string;
  scriptName?: string;
  scriptRecordId?: string;
  scriptType?: number;
  sparringTipContent?: string;
  sparringTipTitle?: string;
  studentThinkTimeFlag?: boolean;
  studentThinkTimeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      agentIconUrl: 'agentIconUrl',
      characterName: 'characterName',
      dialogueTextFlag: 'dialogueTextFlag',
      dialogueTipFlag: 'dialogueTipFlag',
      initiator: 'initiator',
      inputTypeList: 'inputTypeList',
      maxDuration: 'maxDuration',
      scriptDesc: 'scriptDesc',
      scriptName: 'scriptName',
      scriptRecordId: 'scriptRecordId',
      scriptType: 'scriptType',
      sparringTipContent: 'sparringTipContent',
      sparringTipTitle: 'sparringTipTitle',
      studentThinkTimeFlag: 'studentThinkTimeFlag',
      studentThinkTimeLimit: 'studentThinkTimeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIconUrl: 'string',
      characterName: 'string',
      dialogueTextFlag: 'boolean',
      dialogueTipFlag: 'boolean',
      initiator: 'string',
      inputTypeList: { 'type': 'array', 'itemType': 'string' },
      maxDuration: 'number',
      scriptDesc: 'string',
      scriptName: 'string',
      scriptRecordId: 'string',
      scriptType: 'number',
      sparringTipContent: 'string',
      sparringTipTitle: 'string',
      studentThinkTimeFlag: 'boolean',
      studentThinkTimeLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inputTypeList)) {
      $dara.Model.validateArray(this.inputTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAICoachTaskSessionResponseBody extends $dara.Model {
  channelToken?: string;
  requestId?: string;
  scriptInfo?: CreateAICoachTaskSessionResponseBodyScriptInfo;
  sessionId?: string;
  sessionStatus?: number;
  token?: string;
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      scriptInfo: 'scriptInfo',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
      token: 'token',
      webSocketUrl: 'webSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      scriptInfo: CreateAICoachTaskSessionResponseBodyScriptInfo,
      sessionId: 'string',
      sessionStatus: 'number',
      token: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    if(this.scriptInfo && typeof (this.scriptInfo as any).validate === 'function') {
      (this.scriptInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

