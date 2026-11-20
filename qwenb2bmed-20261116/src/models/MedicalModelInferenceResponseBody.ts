// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalModelInferenceResponseBodyAudioFrames extends $dara.Model {
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
   * The request correlation ID.
   * 
   * @example
   * med-req-001
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

export class MedicalModelInferenceResponseBodyCommunication extends $dara.Model {
  /**
   * @remarks
   * The business request ID. This is the same as the business request ID when present.
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the business response frame.
   * 
   * @example
   * 1
   */
  responseId?: number;
  /**
   * @remarks
   * The ID of the customer session.
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

export class MedicalModelInferenceResponseBodyDataExtraInfoInputResources extends $dara.Model {
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
   * The name of the resource file.
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
   * The type of the input resource.
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

export class MedicalModelInferenceResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The transfer results of the input resources for this round.
   */
  inputResources?: MedicalModelInferenceResponseBodyDataExtraInfoInputResources[];
  static names(): { [key: string]: string } {
    return {
      inputResources: 'inputResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputResources: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyDataExtraInfoInputResources },
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

export class MedicalModelInferenceResponseBodyDataMessagesMetaDataMultiLoad extends $dara.Model {
  /**
   * @remarks
   * The content of the card.
   * 
   * @example
   * {"list":[{"image_url":"https://example.com/image.jpg","image_width":"800","image_height":"600"}]}
   */
  content?: any;
  /**
   * @remarks
   * The reference identifier of the card.
   * 
   * @example
   * image_waterfall_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * The type of the card.
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

export class MedicalModelInferenceResponseBodyDataMessagesMetaData extends $dara.Model {
  /**
   * @remarks
   * The title of the status bar.
   * 
   * @example
   * Analyzing the issue
   */
  barTitle?: string;
  /**
   * @remarks
   * The content of the metadata.
   * 
   * @example
   * {"body":"Analyzing the user\\"s issue.","status":"processing"}
   */
  content?: any;
  /**
   * @remarks
   * The list of structured content associated with the body, such as image-text cards, returned by message type.
   */
  multiLoad?: MedicalModelInferenceResponseBodyDataMessagesMetaDataMultiLoad[];
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
   * The type of the metadata.
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
      multiLoad: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyDataMessagesMetaDataMultiLoad },
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

export class MedicalModelInferenceResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * The text or content corresponding to the message type.
   * 
   * @example
   * Hemoglobin is used to carry oxygen. When interpreting the report, you can refer to the reference ranges provided on the report
   */
  content?: any;
  /**
   * @remarks
   * The extended metadata associated with this message.
   */
  metaData?: MedicalModelInferenceResponseBodyDataMessagesMetaData;
  /**
   * @remarks
   * The type of the message.
   * 
   * @example
   * multi_load/iframe
   */
  mimeType?: string;
  /**
   * @remarks
   * The status of the business message.
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
      metaData: MedicalModelInferenceResponseBodyDataMessagesMetaData,
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

export class MedicalModelInferenceResponseBodyData extends $dara.Model {
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
   * The extended business information, which may include inputResources.
   */
  extraInfo?: MedicalModelInferenceResponseBodyDataExtraInfo;
  /**
   * @remarks
   * The list of messages returned in this business response or the current streaming response frame.
   */
  messages?: MedicalModelInferenceResponseBodyDataMessages[];
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
      extraInfo: MedicalModelInferenceResponseBodyDataExtraInfo,
      messages: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyDataMessages },
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

export class MedicalModelInferenceResponseBodyError extends $dara.Model {
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

export class MedicalModelInferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The optional list of audio frames in the response. This can be empty or omitted when no audio is present.
   */
  audioFrames?: MedicalModelInferenceResponseBodyAudioFrames[];
  /**
   * @remarks
   * The information used to associate response frames with the original business request and session.
   */
  communication?: MedicalModelInferenceResponseBodyCommunication;
  /**
   * @remarks
   * The business data returned in this response, including messages and optional extended information.
   */
  data?: MedicalModelInferenceResponseBodyData;
  /**
   * @remarks
   * The error details returned when a business call fails.
   */
  error?: MedicalModelInferenceResponseBodyError;
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
      audioFrames: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyAudioFrames },
      communication: MedicalModelInferenceResponseBodyCommunication,
      data: MedicalModelInferenceResponseBodyData,
      error: MedicalModelInferenceResponseBodyError,
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

