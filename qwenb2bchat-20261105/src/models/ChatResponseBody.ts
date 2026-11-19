// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBodyAudioFrames extends $dara.Model {
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
   * SUQz
   */
  data?: string;
  /**
   * @remarks
   * Indicates whether the frame is the last audio frame.
   */
  last?: boolean;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * Speech synthesis is currently unavailable
   */
  message?: string;
  /**
   * @remarks
   * The business request correlation ID.
   * 
   * @example
   * req-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the audio or error frame.
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

export class ChatResponseBodyCommunication extends $dara.Model {
  /**
   * @remarks
   * The business request ID, if present.
   * 
   * @example
   * req-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * The identifier of the business response frame.
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
   * session-example-001
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

export class ChatResponseBodyDataExtraInfoInputResources extends $dara.Model {
  /**
   * @remarks
   * The position of the original content block.
   * 
   * @example
   * 1
   */
  contentIndex?: number;
  /**
   * @remarks
   * The file name of the transferred and stored resource.
   * 
   * @example
   * cat.png
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the transferred and stored resource.
   * 
   * @example
   * ws_example_001
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the transferred and stored resource.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The URL of the transferred and stored resource.
   * 
   * @example
   * https://cdn.example.com/uploads/cat.png
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

export class ChatResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The transfer and storage results of the input resources for the current round.
   */
  inputResources?: ChatResponseBodyDataExtraInfoInputResources[];
  static names(): { [key: string]: string } {
    return {
      inputResources: 'inputResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputResources: { 'type': 'array', 'itemType': ChatResponseBodyDataExtraInfoInputResources },
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

export class ChatResponseBodyDataMessagesMetaDataMultiLoad extends $dara.Model {
  /**
   * @remarks
   * The card content.
   * 
   * @example
   * {"list":[{"imageUrl":"https://images.example.com/cat.png"}]}
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

export class ChatResponseBodyDataMessagesMetaData extends $dara.Model {
  /**
   * @remarks
   * The display title of the process module.
   * 
   * @example
   * Issue analysis
   */
  barTitle?: string;
  /**
   * @remarks
   * The complete content snapshot of the process module.
   * 
   * @example
   * {"body":"Analyzing the issue","status":"processing"}
   */
  content?: any;
  /**
   * @remarks
   * The list of structured content associated with the body, such as image-text cards, returned by message type.
   */
  multiLoad?: ChatResponseBodyDataMessagesMetaDataMultiLoad[];
  /**
   * @remarks
   * The process module identifier within the current request.
   * 
   * @example
   * thinking-1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * The process module type.
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
      multiLoad: { 'type': 'array', 'itemType': ChatResponseBodyDataMessagesMetaDataMultiLoad },
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

export class ChatResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * The text or content of the corresponding message type.
   * 
   * @example
   * Image as follows [(image_waterfall_1)]
   */
  content?: any;
  /**
   * @remarks
   * The extended metadata associated with the message.
   */
  metaData?: ChatResponseBodyDataMessagesMetaData;
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
      metaData: ChatResponseBodyDataMessagesMetaData,
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

export class ChatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The optional debug information included in the business response.
   * 
   * @example
   * {"intentLabel":"image_search"}
   */
  debug?: any;
  /**
   * @remarks
   * The business extended information, which may include inputResources.
   */
  extraInfo?: ChatResponseBodyDataExtraInfo;
  /**
   * @remarks
   * The list of messages returned in the business response or the current streaming response frame.
   */
  messages?: ChatResponseBodyDataMessages[];
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
      extraInfo: ChatResponseBodyDataExtraInfo,
      messages: { 'type': 'array', 'itemType': ChatResponseBodyDataMessages },
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

export class ChatResponseBodyError extends $dara.Model {
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
   * The descriptive text of the business error.
   * 
   * @example
   * Invalid request parameters
   */
  message?: string;
  /**
   * @remarks
   * The business request correlation ID of the failed call, used for troubleshooting.
   * 
   * @example
   * req-example-001
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

export class ChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The optional list of audio frames in the response. This list can be empty or omitted when no audio is present.
   */
  audioFrames?: ChatResponseBodyAudioFrames[];
  /**
   * @remarks
   * The information used to associate the response frame with the original business request and session.
   */
  communication?: ChatResponseBodyCommunication;
  /**
   * @remarks
   * The business data returned in the response, including messages and optional extended information.
   */
  data?: ChatResponseBodyData;
  /**
   * @remarks
   * The error details returned when a business call fails.
   */
  error?: ChatResponseBodyError;
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
   * req-example-001
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
      audioFrames: { 'type': 'array', 'itemType': ChatResponseBodyAudioFrames },
      communication: ChatResponseBodyCommunication,
      data: ChatResponseBodyData,
      error: ChatResponseBodyError,
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

