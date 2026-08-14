// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInfoResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Link to the result of the Auto Chapters feature.
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_AutoChapters_20231222101215.json?Expires=1706064016
   */
  autoChapters?: string;
  /**
   * @remarks
   * URL link to the result of conversation content extraction
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_ ContentExtraction_20231222101215.json?Expires=1706064016
   */
  contentExtraction?: string;
  /**
   * @remarks
   * Link to the result of the Custom prompt
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_ CustomPrompt_20231222101215.json?Expires=1706064016
   */
  customPrompt?: string;
  /**
   * @remarks
   * The URL link to the identity recognition result.
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_ IdentityRecognition_20231222101215.json?Expires=1706064016
   */
  identityRecognition?: string;
  /**
   * @remarks
   * URL link to the result of Intelligent Meeting Summary
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_MeetingAssistance_20231222101112.json?Expires=1706064016
   */
  meetingAssistance?: string;
  /**
   * @remarks
   * URL link to the result of video PPT extraction and summarization
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_PptExtraction_20231222101215.json?Expires=1706064016
   */
  pptExtraction?: string;
  /**
   * @remarks
   * Link to the result of service inspection
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_ ServiceInspection_20231222101215.json?Expires=1706064016
   */
  serviceInspection?: string;
  /**
   * @remarks
   * Link to the result of LLM-based summarization.
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_Summarization_20231222101215.json?Expires=1706064016
   */
  summarization?: string;
  /**
   * @remarks
   * Link to the result of spoken-to-written text conversion
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_TextPolish_20231222101215.json?Expires=1706064016
   */
  textPolish?: string;
  /**
   * @remarks
   * Link to the result of speech transcription.
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_Transcription_20231222101008.json?Expires=1706064016
   */
  transcription?: string;
  /**
   * @remarks
   * URL link to the result of text translation
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_Translation_20231222101215.json?Expires=1706064016
   */
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
  /**
   * @remarks
   * Error code
   * 
   * @example
   * TSC.AudioFormat
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Audio format invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * URL link to the MP3 conversion result
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_20231222101008.mp3?Expires=1706064016
   */
  outputMp3Path?: string;
  /**
   * @remarks
   * URL link to the MP4 conversion result
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_20231222101008.mp4?Expires=1706064016
   */
  outputMp4Path?: string;
  /**
   * @remarks
   * URL link to the audio waveform graph
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_20231222101008.spectrum?Expires=1706064016
   */
  outputSpectrumPath?: string;
  /**
   * @remarks
   * URL link to the video thumbnail
   * 
   * @example
   * http://xxxx.com/tingwu/output/1738248324/094e964bf0e04e39/094e964bf0e04e39_20231222101008.png?Expires=1706064016
   */
  outputThumbnailPath?: string;
  /**
   * @remarks
   * A collection of results from various algorithm processing tasks. The result is returned as an HTTP link, which the user can use to parse the native result.
   */
  result?: GetTaskInfoResponseBodyDataResult;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * c5394c6ee0fb474899d42215a3925c7e
   */
  taskId?: string;
  /**
   * @remarks
   * The custom ID set by the user when creating the job.
   * 
   * @example
   * task_tingwu_123
   */
  taskKey?: string;
  /**
   * @remarks
   * Task Status.
   * 
   * - ONGOING: The job is in progress.
   * - COMPLETED: The job is completed.
   * - FAILED: The job has failed.
   * - INVALID: The job is invalid.
   * 
   * @example
   * COMPLETED
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
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Returned object.
   */
  data?: GetTaskInfoResponseBodyData;
  /**
   * @remarks
   * Status description.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used only for joint debugging.
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

