// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateTaskRequest extends $tea.Model {
  /**
   * @example
   * JV1sRTisRMi****
   */
  appKey?: string;
  input?: CreateTaskRequestInput;
  parameters?: CreateTaskRequestParameters;
  /**
   * @example
   * stop
   */
  operation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * offline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      input: 'Input',
      parameters: 'Parameters',
      operation: 'operation',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      input: CreateTaskRequestInput,
      parameters: CreateTaskRequestParameters,
      operation: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: CreateTaskResponseBodyData;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTranscriptionPhrasesRequest extends $tea.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      wordWeights: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTranscriptionPhrasesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: CreateTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTranscriptionPhrasesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTranscriptionPhrasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTranscriptionPhrasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscriptionPhrasesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscriptionPhrasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTranscriptionPhrasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetTaskInfoResponseBodyData;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTaskInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTranscriptionPhrasesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTranscriptionPhrasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ListTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTranscriptionPhrasesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTranscriptionPhrasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscriptionPhrasesRequest extends $tea.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      wordWeights: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscriptionPhrasesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: UpdateTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTranscriptionPhrasesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscriptionPhrasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTranscriptionPhrasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTranscriptionPhrasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestInput extends $tea.Model {
  /**
   * @example
   * http://xxx.com/zzz/1.wav
   */
  fileUrl?: string;
  /**
   * @example
   * pcm
   */
  format?: string;
  multipleStreamsEnabled?: boolean;
  outputPath?: string;
  progressiveCallbacksEnabled?: boolean;
  /**
   * @example
   * 16000
   */
  sampleRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn
   */
  sourceLanguage?: string;
  taskId?: string;
  /**
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      format: 'Format',
      multipleStreamsEnabled: 'MultipleStreamsEnabled',
      outputPath: 'OutputPath',
      progressiveCallbacksEnabled: 'ProgressiveCallbacksEnabled',
      sampleRate: 'SampleRate',
      sourceLanguage: 'SourceLanguage',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      format: 'string',
      multipleStreamsEnabled: 'boolean',
      outputPath: 'string',
      progressiveCallbacksEnabled: 'boolean',
      sampleRate: 'number',
      sourceLanguage: 'string',
      taskId: 'string',
      taskKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersCustomPromptContents extends $tea.Model {
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  transType?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      name: 'Name',
      prompt: 'Prompt',
      transType: 'TransType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      name: 'string',
      prompt: 'string',
      transType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersCustomPrompt extends $tea.Model {
  contents?: CreateTaskRequestParametersCustomPromptContents[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': CreateTaskRequestParametersCustomPromptContents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersExtraParams extends $tea.Model {
  domainEducationEnabled?: boolean;
  maxKeywords?: number;
  nfixEnabled?: boolean;
  ocrAuxiliaryEnabled?: boolean;
  translateLlmSceneEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainEducationEnabled: 'DomainEducationEnabled',
      maxKeywords: 'MaxKeywords',
      nfixEnabled: 'NfixEnabled',
      ocrAuxiliaryEnabled: 'OcrAuxiliaryEnabled',
      translateLlmSceneEnabled: 'TranslateLlmSceneEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainEducationEnabled: 'boolean',
      maxKeywords: 'number',
      nfixEnabled: 'boolean',
      ocrAuxiliaryEnabled: 'boolean',
      translateLlmSceneEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersMeetingAssistance extends $tea.Model {
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersServiceInspectionInspectionContents extends $tea.Model {
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersServiceInspection extends $tea.Model {
  inspectionContents?: CreateTaskRequestParametersServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  speakerMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
      speakerMap: 'SpeakerMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': CreateTaskRequestParametersServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
      speakerMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersSummarization extends $tea.Model {
  /**
   * @example
   * Paragraph
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranscoding extends $tea.Model {
  /**
   * @example
   * false
   */
  spectrumEnabled?: boolean;
  /**
   * @example
   * mp3
   */
  targetAudioFormat?: string;
  /**
   * @example
   * mp4
   */
  targetVideoFormat?: string;
  /**
   * @example
   * false
   */
  videoThumbnailEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      spectrumEnabled: 'SpectrumEnabled',
      targetAudioFormat: 'TargetAudioFormat',
      targetVideoFormat: 'TargetVideoFormat',
      videoThumbnailEnabled: 'VideoThumbnailEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spectrumEnabled: 'boolean',
      targetAudioFormat: 'string',
      targetVideoFormat: 'string',
      videoThumbnailEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranscriptionDiarization extends $tea.Model {
  /**
   * @example
   * 2
   */
  speakerCount?: number;
  static names(): { [key: string]: string } {
    return {
      speakerCount: 'SpeakerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speakerCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranscription extends $tea.Model {
  additionalStreamOutputLevel?: number;
  /**
   * @example
   * false
   */
  audioEventDetectionEnabled?: boolean;
  diarization?: CreateTaskRequestParametersTranscriptionDiarization;
  /**
   * @example
   * false
   */
  diarizationEnabled?: boolean;
  model?: string;
  outputLevel?: number;
  phraseId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalStreamOutputLevel: 'AdditionalStreamOutputLevel',
      audioEventDetectionEnabled: 'AudioEventDetectionEnabled',
      diarization: 'Diarization',
      diarizationEnabled: 'DiarizationEnabled',
      model: 'Model',
      outputLevel: 'OutputLevel',
      phraseId: 'PhraseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalStreamOutputLevel: 'number',
      audioEventDetectionEnabled: 'boolean',
      diarization: CreateTaskRequestParametersTranscriptionDiarization,
      diarizationEnabled: 'boolean',
      model: 'string',
      outputLevel: 'number',
      phraseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParametersTranslation extends $tea.Model {
  additionalStreamOutputLevel?: number;
  outputLevel?: number;
  targetLanguages?: string[];
  static names(): { [key: string]: string } {
    return {
      additionalStreamOutputLevel: 'AdditionalStreamOutputLevel',
      outputLevel: 'OutputLevel',
      targetLanguages: 'TargetLanguages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalStreamOutputLevel: 'number',
      outputLevel: 'number',
      targetLanguages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestParameters extends $tea.Model {
  /**
   * @example
   * true
   */
  autoChaptersEnabled?: boolean;
  customPrompt?: CreateTaskRequestParametersCustomPrompt;
  customPromptEnabled?: boolean;
  extraParams?: CreateTaskRequestParametersExtraParams;
  meetingAssistance?: CreateTaskRequestParametersMeetingAssistance;
  /**
   * @example
   * false
   */
  meetingAssistanceEnabled?: boolean;
  pptExtractionEnabled?: boolean;
  serviceInspection?: CreateTaskRequestParametersServiceInspection;
  serviceInspectionEnabled?: boolean;
  summarization?: CreateTaskRequestParametersSummarization;
  /**
   * @example
   * false
   */
  summarizationEnabled?: boolean;
  textPolishEnabled?: boolean;
  transcoding?: CreateTaskRequestParametersTranscoding;
  transcription?: CreateTaskRequestParametersTranscription;
  translation?: CreateTaskRequestParametersTranslation;
  /**
   * @example
   * false
   */
  translationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoChaptersEnabled: 'AutoChaptersEnabled',
      customPrompt: 'CustomPrompt',
      customPromptEnabled: 'CustomPromptEnabled',
      extraParams: 'ExtraParams',
      meetingAssistance: 'MeetingAssistance',
      meetingAssistanceEnabled: 'MeetingAssistanceEnabled',
      pptExtractionEnabled: 'PptExtractionEnabled',
      serviceInspection: 'ServiceInspection',
      serviceInspectionEnabled: 'ServiceInspectionEnabled',
      summarization: 'Summarization',
      summarizationEnabled: 'SummarizationEnabled',
      textPolishEnabled: 'TextPolishEnabled',
      transcoding: 'Transcoding',
      transcription: 'Transcription',
      translation: 'Translation',
      translationEnabled: 'TranslationEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoChaptersEnabled: 'boolean',
      customPrompt: CreateTaskRequestParametersCustomPrompt,
      customPromptEnabled: 'boolean',
      extraParams: CreateTaskRequestParametersExtraParams,
      meetingAssistance: CreateTaskRequestParametersMeetingAssistance,
      meetingAssistanceEnabled: 'boolean',
      pptExtractionEnabled: 'boolean',
      serviceInspection: CreateTaskRequestParametersServiceInspection,
      serviceInspectionEnabled: 'boolean',
      summarization: CreateTaskRequestParametersSummarization,
      summarizationEnabled: 'boolean',
      textPolishEnabled: 'boolean',
      transcoding: CreateTaskRequestParametersTranscoding,
      transcription: CreateTaskRequestParametersTranscription,
      translation: CreateTaskRequestParametersTranslation,
      translationEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBodyData extends $tea.Model {
  meetingJoinUrl?: string;
  /**
   * @example
   * c5394c6ee0fb474899d42215a3925c7e
   */
  taskId?: string;
  /**
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      meetingJoinUrl: 'MeetingJoinUrl',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingJoinUrl: 'string',
      taskId: 'string',
      taskKey: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTranscriptionPhrasesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phraseId: 'PhraseId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phraseId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponseBodyDataResult extends $tea.Model {
  autoChapters?: string;
  customPrompt?: string;
  meetingAssistance?: string;
  pptExtraction?: string;
  serviceInspection?: string;
  summarization?: string;
  textPolish?: string;
  transcription?: string;
  translation?: string;
  static names(): { [key: string]: string } {
    return {
      autoChapters: 'AutoChapters',
      customPrompt: 'CustomPrompt',
      meetingAssistance: 'MeetingAssistance',
      pptExtraction: 'PptExtraction',
      serviceInspection: 'ServiceInspection',
      summarization: 'Summarization',
      textPolish: 'TextPolish',
      transcription: 'Transcription',
      translation: 'Translation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoChapters: 'string',
      customPrompt: 'string',
      meetingAssistance: 'string',
      pptExtraction: 'string',
      serviceInspection: 'string',
      summarization: 'string',
      textPolish: 'string',
      transcription: 'string',
      translation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  outputMp3Path?: string;
  outputMp4Path?: string;
  outputSpectrumPath?: string;
  outputThumbnailPath?: string;
  result?: GetTaskInfoResponseBodyDataResult;
  /**
   * @example
   * c5394c6ee0fb474899d42215a3925c7e
   */
  taskId?: string;
  /**
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  /**
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      outputMp3Path: 'OutputMp3Path',
      outputMp4Path: 'OutputMp4Path',
      outputSpectrumPath: 'OutputSpectrumPath',
      outputThumbnailPath: 'OutputThumbnailPath',
      result: 'Result',
      taskId: 'TaskId',
      taskKey: 'TaskKey',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      outputMp3Path: 'string',
      outputMp4Path: 'string',
      outputSpectrumPath: 'string',
      outputThumbnailPath: 'string',
      result: GetTaskInfoResponseBodyDataResult,
      taskId: 'string',
      taskKey: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponseBodyDataPhrases extends $tea.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  /**
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      phraseId: 'PhraseId',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      phraseId: 'string',
      wordWeights: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  phrases?: GetTranscriptionPhrasesResponseBodyDataPhrases[];
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phrases: 'Phrases',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phrases: { 'type': 'array', 'itemType': GetTranscriptionPhrasesResponseBodyDataPhrases },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponseBodyDataPhrases extends $tea.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      phraseId: 'PhraseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      phraseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponseBodyData extends $tea.Model {
  /**
   * @example
   * PHS.Exceed
   */
  errorCode?: string;
  /**
   * @example
   * The num of the phrase exceeds the upper limit.
   */
  errorMessage?: string;
  phrases?: ListTranscriptionPhrasesResponseBodyDataPhrases[];
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phrases: 'Phrases',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phrases: { 'type': 'array', 'itemType': ListTranscriptionPhrasesResponseBodyDataPhrases },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTranscriptionPhrasesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tingwu", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建听悟任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      query["operation"] = request.operation;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/tasks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * 创建听悟任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建热词词表
   * 
   * @param request - CreateTranscriptionPhrasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTranscriptionPhrasesResponse
   */
  async createTranscriptionPhrasesWithOptions(request: CreateTranscriptionPhrasesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTranscriptionPhrasesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.wordWeights)) {
      body["WordWeights"] = request.wordWeights;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new CreateTranscriptionPhrasesResponse({}));
  }

  /**
   * 创建热词词表
   * 
   * @param request - CreateTranscriptionPhrasesRequest
   * @returns CreateTranscriptionPhrasesResponse
   */
  async createTranscriptionPhrases(request: CreateTranscriptionPhrasesRequest): Promise<CreateTranscriptionPhrasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTranscriptionPhrasesWithOptions(request, headers, runtime);
  }

  /**
   * 删除词表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTranscriptionPhrasesResponse
   */
  async deleteTranscriptionPhrasesWithOptions(PhraseId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTranscriptionPhrasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${OpenApiUtil.getEncodeParam(PhraseId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new DeleteTranscriptionPhrasesResponse({}));
  }

  /**
   * 删除词表
   * @returns DeleteTranscriptionPhrasesResponse
   */
  async deleteTranscriptionPhrases(PhraseId: string): Promise<DeleteTranscriptionPhrasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTranscriptionPhrasesWithOptions(PhraseId, headers, runtime);
  }

  /**
   * 查询听悟任务信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskInfoResponse
   */
  async getTaskInfoWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/tasks/${OpenApiUtil.getEncodeParam(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskInfoResponse>(await this.callApi(params, req, runtime), new GetTaskInfoResponse({}));
  }

  /**
   * 查询听悟任务信息
   * @returns GetTaskInfoResponse
   */
  async getTaskInfo(TaskId: string): Promise<GetTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskInfoWithOptions(TaskId, headers, runtime);
  }

  /**
   * 查询热词词表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscriptionPhrasesResponse
   */
  async getTranscriptionPhrasesWithOptions(PhraseId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTranscriptionPhrasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${OpenApiUtil.getEncodeParam(PhraseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new GetTranscriptionPhrasesResponse({}));
  }

  /**
   * 查询热词词表信息
   * @returns GetTranscriptionPhrasesResponse
   */
  async getTranscriptionPhrases(PhraseId: string): Promise<GetTranscriptionPhrasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTranscriptionPhrasesWithOptions(PhraseId, headers, runtime);
  }

  /**
   * 列举用户所有热词词表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranscriptionPhrasesResponse
   */
  async listTranscriptionPhrasesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTranscriptionPhrasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new ListTranscriptionPhrasesResponse({}));
  }

  /**
   * 列举用户所有热词词表信息
   * @returns ListTranscriptionPhrasesResponse
   */
  async listTranscriptionPhrases(): Promise<ListTranscriptionPhrasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTranscriptionPhrasesWithOptions(headers, runtime);
  }

  /**
   * 更新热词词表
   * 
   * @param request - UpdateTranscriptionPhrasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTranscriptionPhrasesResponse
   */
  async updateTranscriptionPhrasesWithOptions(PhraseId: string, request: UpdateTranscriptionPhrasesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTranscriptionPhrasesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.wordWeights)) {
      body["WordWeights"] = request.wordWeights;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${OpenApiUtil.getEncodeParam(PhraseId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new UpdateTranscriptionPhrasesResponse({}));
  }

  /**
   * 更新热词词表
   * 
   * @param request - UpdateTranscriptionPhrasesRequest
   * @returns UpdateTranscriptionPhrasesResponse
   */
  async updateTranscriptionPhrases(PhraseId: string, request: UpdateTranscriptionPhrasesRequest): Promise<UpdateTranscriptionPhrasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTranscriptionPhrasesWithOptions(PhraseId, request, headers, runtime);
  }

}
