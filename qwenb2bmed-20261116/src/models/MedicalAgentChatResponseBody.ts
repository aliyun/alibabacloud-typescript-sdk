// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalAgentChatResponseBodyAudioFrames extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DOWNSTREAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The encoded audio data.
   * 
   * @example
   * AAEC
   */
  data?: string;
  /**
   * @remarks
   * Indicates whether this is the last audio frame.
   */
  last?: boolean;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * Audio generation failed
   */
  message?: string;
  /**
   * @remarks
   * The business request correlation ID.
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  /**
   * @remarks
   * The audio or error frame type.
   * 
   * @example
   * audio
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      last: 'last',
      message: 'message',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      last: 'boolean',
      message: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyCommunication extends $dara.Model {
  /**
   * @remarks
   * The business request ID, which is identical to the original request ID when present.
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  /**
   * @remarks
   * The business response frame ID.
   * 
   * @example
   * 1
   */
  responseId?: number;
  /**
   * @remarks
   * The customer session ID.
   * 
   * @example
   * med-session-001
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      responseId: 'responseId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseId: 'number',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyDataExtraInfoInputResources extends $dara.Model {
  /**
   * @remarks
   * The index of the original content block.
   * 
   * @example
   * 1
   */
  contentIndex?: number;
  /**
   * @remarks
   * The resource file name.
   * 
   * @example
   * report.png
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the transferred resource.
   * 
   * @example
   * ws_123
   */
  resourceId?: string;
  /**
   * @remarks
   * The input resource type.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The URL of the transferred resource.
   * 
   * @example
   * https://example.com/report.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentIndex: 'contentIndex',
      fileName: 'fileName',
      resourceId: 'resourceId',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentIndex: 'number',
      fileName: 'string',
      resourceId: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The transfer results of the input resources for this round.
   */
  inputResources?: MedicalAgentChatResponseBodyDataExtraInfoInputResources[];
  static names(): { [key: string]: string } {
    return {
      inputResources: 'inputResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputResources: { 'type': 'array', 'itemType': MedicalAgentChatResponseBodyDataExtraInfoInputResources },
    };
  }

  validate() {
    if(Array.isArray(this.inputResources)) {
      $dara.Model.validateArray(this.inputResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyDataMessagesMetaDataMultiLoad extends $dara.Model {
  /**
   * @remarks
   * The card content.
   * 
   * @example
   * {"list":[{"image_url":"https://example.com/image.jpg","image_width":"800","image_height":"600"}]}
   */
  content?: any;
  /**
   * @remarks
   * The card reference identifier.
   * 
   * @example
   * image_waterfall_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * The card type.
   * 
   * @example
   * image_waterfall
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourceSeq: 'sourceSeq',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      sourceSeq: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyDataMessagesMetaData extends $dara.Model {
  /**
   * @remarks
   * The status bar title.
   * 
   * @example
   * Analyzing the issue
   */
  barTitle?: string;
  /**
   * @remarks
   * The metadata content.
   * 
   * @example
   * {"body":"Analyzing the user\\"s issue.","status":"processing"}
   */
  content?: any;
  /**
   * @remarks
   * The list of structured content associated with the body, such as image-text cards, returned by message type.
   */
  multiLoad?: MedicalAgentChatResponseBodyDataMessagesMetaDataMultiLoad[];
  /**
   * @remarks
   * The source identifier.
   * 
   * @example
   * bar_thinking_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * The metadata type.
   * 
   * @example
   * bar_thinking
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      barTitle: 'barTitle',
      content: 'content',
      multiLoad: 'multiLoad',
      sourceSeq: 'sourceSeq',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barTitle: 'string',
      content: 'any',
      multiLoad: { 'type': 'array', 'itemType': MedicalAgentChatResponseBodyDataMessagesMetaDataMultiLoad },
      sourceSeq: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiLoad)) {
      $dara.Model.validateArray(this.multiLoad);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * The text or content corresponding to the message type.
   * 
   * @example
   * Hemoglobin carries oxygen. Refer to the reference ranges on the report for interpretation
   */
  content?: any;
  /**
   * @remarks
   * The extended metadata associated with this message.
   */
  metaData?: MedicalAgentChatResponseBodyDataMessagesMetaData;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * multi_load/iframe
   */
  mimeType?: string;
  /**
   * @remarks
   * The business message status.
   * 
   * @example
   * complete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      metaData: 'metaData',
      mimeType: 'mimeType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      metaData: MedicalAgentChatResponseBodyDataMessagesMetaData,
      mimeType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The optional debug information included in the business response.
   * 
   * @example
   * {}
   */
  debug?: any;
  /**
   * @remarks
   * The business extended information, which may include inputResources.
   */
  extraInfo?: MedicalAgentChatResponseBodyDataExtraInfo;
  /**
   * @remarks
   * The list of messages returned in this business response or the current streaming response frame.
   */
  messages?: MedicalAgentChatResponseBodyDataMessages[];
  static names(): { [key: string]: string } {
    return {
      debug: 'debug',
      extraInfo: 'extraInfo',
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'any',
      extraInfo: MedicalAgentChatResponseBodyDataExtraInfo,
      messages: { 'type': 'array', 'itemType': MedicalAgentChatResponseBodyDataMessages },
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * The business error code used by the client to identify the failure type.
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: any;
  /**
   * @remarks
   * The descriptive text for the business error.
   * 
   * @example
   * Invalid request parameters
   */
  message?: string;
  /**
   * @remarks
   * The business request correlation ID for the failed call, used to troubleshoot the issue.
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MedicalAgentChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The optional list of audio frames in the response. This list can be empty or omitted when no audio is present.
   */
  audioFrames?: MedicalAgentChatResponseBodyAudioFrames[];
  /**
   * @remarks
   * The information used to correlate response frames with the original business request and session.
   */
  communication?: MedicalAgentChatResponseBodyCommunication;
  /**
   * @remarks
   * The business data returned in this response, including messages and optional extended information.
   */
  data?: MedicalAgentChatResponseBodyData;
  /**
   * @remarks
   * The error details returned when a business call fails.
   */
  error?: MedicalAgentChatResponseBodyError;
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * 0
   */
  errorCode?: any;
  /**
   * @remarks
   * The business status description.
   * 
   * @example
   * success
   */
  errorMsg?: string;
  /**
   * @remarks
   * The optional business request correlation ID. For the POP request ID, see x-acs-request-id.
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      audioFrames: 'audioFrames',
      communication: 'communication',
      data: 'data',
      error: 'error',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrames: { 'type': 'array', 'itemType': MedicalAgentChatResponseBodyAudioFrames },
      communication: MedicalAgentChatResponseBodyCommunication,
      data: MedicalAgentChatResponseBodyData,
      error: MedicalAgentChatResponseBodyError,
      errorCode: 'any',
      errorMsg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioFrames)) {
      $dara.Model.validateArray(this.audioFrames);
    }
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

