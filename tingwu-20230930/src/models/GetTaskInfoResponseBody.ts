// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInfoResponseBodyDataResult extends $dara.Model {
  autoChapters?: string;
  contentExtraction?: string;
  customPrompt?: string;
  identityRecognition?: string;
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
      contentExtraction: 'ContentExtraction',
      customPrompt: 'CustomPrompt',
      identityRecognition: 'IdentityRecognition',
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
      contentExtraction: 'string',
      customPrompt: 'string',
      identityRecognition: 'string',
      meetingAssistance: 'string',
      pptExtraction: 'string',
      serviceInspection: 'string',
      summarization: 'string',
      textPolish: 'string',
      transcription: 'string',
      translation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponseBodyData extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInfoResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

