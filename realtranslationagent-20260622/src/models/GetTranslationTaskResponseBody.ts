// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslationTaskResponseBodyDataConfig extends $dara.Model {
  /**
   * @remarks
   * The security level.
   * - public: Standard confidentiality.
   * 
   * @example
   * public
   */
  securityLevel?: string;
  /**
   * @remarks
   * The source file language.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The translation style. This parameter takes effect only when the translation file is a PPT file.
   * - normal: Standard. The original information is fully preserved.
   * - minimal: More concise information with a more visually appealing layout.
   * 
   * @example
   * minimal
   */
  style?: string;
  /**
   * @remarks
   * The target language.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The translation template.
   * - common: General-purpose.
   * 
   * @example
   * common
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      securityLevel: 'SecurityLevel',
      sourceLanguage: 'SourceLanguage',
      style: 'Style',
      targetLanguage: 'TargetLanguage',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityLevel: 'string',
      sourceLanguage: 'string',
      style: 'string',
      targetLanguage: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslationTaskResponseBodyDataExtractedTerms extends $dara.Model {
  /**
   * @remarks
   * The source term.
   * 
   * @example
   * puppy
   */
  sourceTerm?: string;
  /**
   * @remarks
   * The translated term.
   * 
   * @example
   * dog
   */
  targetTerm?: string;
  static names(): { [key: string]: string } {
    return {
      sourceTerm: 'SourceTerm',
      targetTerm: 'TargetTerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceTerm: 'string',
      targetTerm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslationTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The translation task ID of a previously submitted task. This parameter is passed in when resubmitting a translation task.
   * 
   * @example
   * f9c35b0453b
   */
  baseTaskId?: string;
  /**
   * @remarks
   * The translation configuration.
   */
  config?: GetTranslationTaskResponseBodyDataConfig;
  /**
   * @remarks
   * The credits consumed by this task.
   * 
   * @example
   * 2.5510
   */
  costCredits?: number;
  /**
   * @remarks
   * The time consumed, in milliseconds.
   * 
   * @example
   * 43
   */
  costTime?: number;
  /**
   * @remarks
   * The error message when the task fails.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The estimated credits to be consumed.
   * 
   * @example
   * 2.5510
   */
  estimatedCostCredits?: number;
  /**
   * @remarks
   * The estimated translation time, in **seconds**.
   * 
   * @example
   * 40000
   */
  estimatedTime?: number;
  /**
   * @remarks
   * The terms used in this task.
   */
  extractedTerms?: GetTranslationTaskResponseBodyDataExtractedTerms[];
  /**
   * @remarks
   * The parsed file format.
   * 
   * @example
   * PPTX
   */
  fileFormat?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * translated_a_file.pptx
   */
  fileName?: string;
  /**
   * @remarks
   * The task completion time, expressed as a 13-digit timestamp.
   * 
   * @example
   * 1774147442
   */
  finishedAt?: string;
  /**
   * @remarks
   * The languages that support font modification and the corresponding font lists. The key of the map identifies the language type. Currently supported languages include English, French, Indonesian, and Japanese.
   */
  fonts?: { [key: string]: string[] };
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org_e5b74*****9c94209
   */
  orgId?: string;
  /**
   * @remarks
   * The source file address.
   * 
   * @example
   * translated_a_file.pptx
   */
  originalFileName?: string;
  /**
   * @remarks
   * The page count of the uploaded file.
   * 
   * @example
   * 0
   */
  pageCount?: number;
  /**
   * @remarks
   * The progress, expressed as a percentage number.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * PROCESSING
   */
  status?: string;
  /**
   * @remarks
   * The translation task ID.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * - DOCUMENT: Document type.
   * 
   * @example
   * DOCUMENT
   */
  taskType?: string;
  /**
   * @remarks
   * The word count of the uploaded document.
   * 
   * @example
   * 1600
   */
  wordCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * c2b898f******c985c
   */
  workSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      baseTaskId: 'BaseTaskId',
      config: 'Config',
      costCredits: 'CostCredits',
      costTime: 'CostTime',
      errorMessage: 'ErrorMessage',
      estimatedCostCredits: 'EstimatedCostCredits',
      estimatedTime: 'EstimatedTime',
      extractedTerms: 'ExtractedTerms',
      fileFormat: 'FileFormat',
      fileName: 'FileName',
      finishedAt: 'FinishedAt',
      fonts: 'Fonts',
      orgId: 'OrgId',
      originalFileName: 'OriginalFileName',
      pageCount: 'PageCount',
      progress: 'Progress',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      wordCount: 'WordCount',
      workSpaceId: 'WorkSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTaskId: 'string',
      config: GetTranslationTaskResponseBodyDataConfig,
      costCredits: 'number',
      costTime: 'number',
      errorMessage: 'string',
      estimatedCostCredits: 'number',
      estimatedTime: 'number',
      extractedTerms: { 'type': 'array', 'itemType': GetTranslationTaskResponseBodyDataExtractedTerms },
      fileFormat: 'string',
      fileName: 'string',
      finishedAt: 'string',
      fonts: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      orgId: 'string',
      originalFileName: 'string',
      pageCount: 'number',
      progress: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      wordCount: 'number',
      workSpaceId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.extractedTerms)) {
      $dara.Model.validateArray(this.extractedTerms);
    }
    if(this.fonts) {
      $dara.Model.validateMap(this.fonts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetTranslationTaskResponseBodyData;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDD51FD8-93E0-5161-BCA6-38A8393F26D9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTranslationTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

