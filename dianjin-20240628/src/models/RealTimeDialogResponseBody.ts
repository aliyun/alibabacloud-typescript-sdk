// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeDialogResponseBodyChoicesDelta extends $dara.Model {
  /**
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * time
   * 
   * @example
   * null
   */
  callTime?: string;
  /**
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  /**
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @example
   * null
   */
  recommendScript?: string;
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  skipCurrentRecognize?: boolean;
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
      skipCurrentRecognize: 'skipCurrentRecognize',
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
      skipCurrentRecognize: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponseBodyChoicesMessage extends $dara.Model {
  /**
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * time
   * 
   * @example
   * 1735139569523
   */
  callTime?: string;
  /**
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  /**
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @example
   * null
   */
  recommendScript?: string;
  /**
   * @example
   * null
   */
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  skipCurrentRecognize?: boolean;
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
      skipCurrentRecognize: 'skipCurrentRecognize',
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
      skipCurrentRecognize: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponseBodyChoices extends $dara.Model {
  delta?: RealTimeDialogResponseBodyChoicesDelta;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RealTimeDialogResponseBodyChoicesMessage;
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
      delta: RealTimeDialogResponseBodyChoicesDelta,
      finishReason: 'string',
      index: 'number',
      message: RealTimeDialogResponseBodyChoicesMessage,
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

export class RealTimeDialogResponseBody extends $dara.Model {
  choices?: RealTimeDialogResponseBodyChoices[];
  /**
   * @example
   * 1735139569523
   */
  created?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      choices: { 'type': 'array', 'itemType': RealTimeDialogResponseBodyChoices },
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

