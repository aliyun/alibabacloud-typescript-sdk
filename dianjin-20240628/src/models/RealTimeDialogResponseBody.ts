// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeDialogResponseBodyChoicesDelta extends $dara.Model {
  /**
   * @remarks
   * The analysis process.
   * 
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * null
   */
  callTime?: string;
  /**
   * @remarks
   * Hangs up the dialog.
   * 
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * 其他
   */
  intentionName?: string;
  /**
   * @remarks
   * The intent script.
   * 
   * @example
   * 抱歉，我没有明白您的意思，或者您可以拨打我们的客服热线，请客服人员为您解答。
   */
  intentionScript?: string;
  /**
   * @remarks
   * Specifies whether the conversation was interrupted.
   * 
   * @example
   * false
   */
  interrupt?: boolean;
  /**
   * @remarks
   * The recommended intent.
   * 
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @remarks
   * The recommended script.
   * 
   * @example
   * null
   */
  recommendScript?: string;
  /**
   * @remarks
   * The script for the Q\\&A pair. This is incremental data.
   * 
   * @example
   * 话题
   */
  selfDirectedScript?: string;
  /**
   * @remarks
   * The script for the Q\\&A pair. This is the full data.
   * 
   * @example
   * 关于宇宙的大小，这是一个非常深奥的科学话题
   */
  selfDirectedScriptFullContent?: string;
  /**
   * @remarks
   * Specifies whether to skip the current recognition.
   * 
   * @example
   * false
   */
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
   * @remarks
   * The analysis process.
   * 
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * 1735139569523
   */
  callTime?: string;
  /**
   * @remarks
   * Hang up the dialog.
   * 
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * 其它
   */
  intentionName?: string;
  /**
   * @remarks
   * The intent script.
   * 
   * @example
   * 抱歉，我没有明白您的意思，或者您可以拨打我们的客服热线，请客服人员为您解答。
   */
  intentionScript?: string;
  /**
   * @remarks
   * Specifies whether the conversation was interrupted.
   * 
   * @example
   * false
   */
  interrupt?: boolean;
  /**
   * @remarks
   * The recommended intent.
   * 
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @remarks
   * The recommended script.
   * 
   * @example
   * null
   */
  recommendScript?: string;
  /**
   * @remarks
   * The script for the Q\\&A pair. This is incremental data. This is empty for streaming responses.
   * 
   * @example
   * null
   */
  selfDirectedScript?: string;
  /**
   * @remarks
   * The script for the Q\\&A pair. This is the full data.
   * 
   * @example
   * 关于宇宙的大小，这是一个非常深奥的科学话题
   */
  selfDirectedScriptFullContent?: string;
  /**
   * @remarks
   * Specifies whether to skip the current recognition.
   */
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
  /**
   * @remarks
   * The incremental result returned for streaming responses. This is empty for non-streaming responses.
   */
  delta?: RealTimeDialogResponseBodyChoicesDelta;
  /**
   * @remarks
   * The value is \\`stop\\` if the session ends. The value is \\`null\\` if the session is in progress. If \\`success\\` is \\`false\\`, this parameter returns an error message.
   * 
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @remarks
   * The sequence number in the choices list.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The full result returned for non-streaming responses. This is empty for streaming responses.
   */
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
  /**
   * @remarks
   * An array of generated content. It can contain one or more choice objects.
   */
  choices?: RealTimeDialogResponseBodyChoices[];
  /**
   * @remarks
   * The timestamp when this request was created.
   * 
   * @example
   * 1735139569523
   */
  created?: string;
  /**
   * @remarks
   * The unique identifier for this call. Each chunk object has the same ID.
   * 
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

