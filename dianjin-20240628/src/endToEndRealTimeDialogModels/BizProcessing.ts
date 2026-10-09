// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BizProcessingChoicesDelta extends $dara.Model {
  analysisProcess?: string;
  callTime?: string;
  hangUpDialog?: boolean;
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  recommendIntention?: string;
  recommendScript?: string;
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      callTime: 'callTime',
      hangUpDialog: 'hangUpDialog',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      interrupt: 'interrupt',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
      selfDirectedScript: 'selfDirectedScript',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      callTime: 'string',
      hangUpDialog: 'boolean',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      interrupt: 'boolean',
      recommendIntention: 'string',
      recommendScript: 'string',
      selfDirectedScript: 'string',
      selfDirectedScriptFullContent: 'string',
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
  analysisProcess?: string;
  callTime?: string;
  hangUpDialog?: boolean;
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  recommendIntention?: string;
  recommendScript?: string;
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      callTime: 'callTime',
      hangUpDialog: 'hangUpDialog',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      interrupt: 'interrupt',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
      selfDirectedScript: 'selfDirectedScript',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      callTime: 'string',
      hangUpDialog: 'boolean',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      interrupt: 'boolean',
      recommendIntention: 'string',
      recommendScript: 'string',
      selfDirectedScript: 'string',
      selfDirectedScriptFullContent: 'string',
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
  delta?: BizProcessingChoicesDelta;
  finishReason?: string;
  index?: number;
  message?: BizProcessingChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      delta: 'delta',
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: BizProcessingChoicesDelta,
      finishReason: 'string',
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
  choices?: BizProcessingChoices[];
  created?: string;
  id?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': BizProcessingChoices },
      created: 'string',
      id: 'string',
      requestId: 'string',
      success: 'boolean',
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

