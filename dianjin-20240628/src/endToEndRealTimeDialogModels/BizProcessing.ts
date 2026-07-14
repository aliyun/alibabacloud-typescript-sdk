// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BizProcessingChoicesDelta extends $dara.Model {
  recommendIntention?: string;
  selfDirectedScriptFullContent?: string;
  hangUpDialog?: boolean;
  selfDirectedScript?: string;
  analysisProcess?: string;
  interrupt?: boolean;
  intentionCode?: string;
  callTime?: string;
  intentionScript?: string;
  intentionName?: string;
  recommendScript?: string;
  static names(): { [key: string]: string } {
    return {
      recommendIntention: 'recommendIntention',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
      hangUpDialog: 'hangUpDialog',
      selfDirectedScript: 'selfDirectedScript',
      analysisProcess: 'analysisProcess',
      interrupt: 'interrupt',
      intentionCode: 'intentionCode',
      callTime: 'callTime',
      intentionScript: 'intentionScript',
      intentionName: 'intentionName',
      recommendScript: 'recommendScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendIntention: 'string',
      selfDirectedScriptFullContent: 'string',
      hangUpDialog: 'boolean',
      selfDirectedScript: 'string',
      analysisProcess: 'string',
      interrupt: 'boolean',
      intentionCode: 'string',
      callTime: 'string',
      intentionScript: 'string',
      intentionName: 'string',
      recommendScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BizProcessingChoicesMessage extends $dara.Model {
  recommendIntention?: string;
  selfDirectedScriptFullContent?: string;
  hangUpDialog?: boolean;
  selfDirectedScript?: string;
  analysisProcess?: string;
  interrupt?: boolean;
  intentionCode?: string;
  callTime?: string;
  intentionScript?: string;
  intentionName?: string;
  recommendScript?: string;
  static names(): { [key: string]: string } {
    return {
      recommendIntention: 'recommendIntention',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
      hangUpDialog: 'hangUpDialog',
      selfDirectedScript: 'selfDirectedScript',
      analysisProcess: 'analysisProcess',
      interrupt: 'interrupt',
      intentionCode: 'intentionCode',
      callTime: 'callTime',
      intentionScript: 'intentionScript',
      intentionName: 'intentionName',
      recommendScript: 'recommendScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendIntention: 'string',
      selfDirectedScriptFullContent: 'string',
      hangUpDialog: 'boolean',
      selfDirectedScript: 'string',
      analysisProcess: 'string',
      interrupt: 'boolean',
      intentionCode: 'string',
      callTime: 'string',
      intentionScript: 'string',
      intentionName: 'string',
      recommendScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BizProcessingChoices extends $dara.Model {
  finishReason?: string;
  delta?: BizProcessingChoicesDelta;
  index?: number;
  message?: BizProcessingChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      delta: 'delta',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      delta: BizProcessingChoicesDelta,
      index: 'number',
      message: BizProcessingChoicesMessage,
    };
  }

  validate() {
    if(this.delta && typeof (this.delta as any).validate === 'function') {
      (this.delta as any).validate();
    }
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BizProcessing extends $dara.Model {
  id?: string;
  choices?: BizProcessingChoices[];
  created?: string;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      choices: 'choices',
      created: 'created',
      success: 'success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      choices: { 'type': 'array', 'itemType': BizProcessingChoices },
      created: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

