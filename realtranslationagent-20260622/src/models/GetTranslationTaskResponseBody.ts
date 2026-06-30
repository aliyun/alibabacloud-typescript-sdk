// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslationTaskResponseBodyDataConfig extends $dara.Model {
  securityLevel?: string;
  sourceLanguage?: string;
  style?: string;
  targetLanguage?: string;
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
  sourceTerm?: string;
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
  baseTaskId?: string;
  config?: GetTranslationTaskResponseBodyDataConfig;
  costCredits?: number;
  costTime?: number;
  errorMessage?: string;
  estimatedCostCredits?: number;
  estimatedTime?: number;
  extractedTerms?: GetTranslationTaskResponseBodyDataExtractedTerms[];
  fileFormat?: string;
  fileName?: string;
  finishedAt?: string;
  fonts?: { [key: string]: string[] };
  orgId?: string;
  originalFileName?: string;
  pageCount?: number;
  progress?: number;
  status?: string;
  taskId?: string;
  taskType?: string;
  wordCount?: number;
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
  code?: string;
  data?: GetTranslationTaskResponseBodyData;
  message?: string;
  requestId?: string;
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

