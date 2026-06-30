// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadTranslationFileResponseBodyData extends $dara.Model {
  creditBreakdown?: string;
  creditsAvailable?: boolean;
  detectedLang?: string;
  estimatedCostCredits?: number;
  estimatedTime?: number;
  fonts?: { [key: string]: string[] };
  pageCount?: number;
  sensitiveDetected?: boolean;
  sensitiveTags?: string[];
  taskId?: string;
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      creditBreakdown: 'CreditBreakdown',
      creditsAvailable: 'CreditsAvailable',
      detectedLang: 'DetectedLang',
      estimatedCostCredits: 'EstimatedCostCredits',
      estimatedTime: 'EstimatedTime',
      fonts: 'Fonts',
      pageCount: 'PageCount',
      sensitiveDetected: 'SensitiveDetected',
      sensitiveTags: 'SensitiveTags',
      taskId: 'TaskId',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditBreakdown: 'string',
      creditsAvailable: 'boolean',
      detectedLang: 'string',
      estimatedCostCredits: 'number',
      estimatedTime: 'number',
      fonts: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      pageCount: 'number',
      sensitiveDetected: 'boolean',
      sensitiveTags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      wordCount: 'number',
    };
  }

  validate() {
    if(this.fonts) {
      $dara.Model.validateMap(this.fonts);
    }
    if(Array.isArray(this.sensitiveTags)) {
      $dara.Model.validateArray(this.sensitiveTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadTranslationFileResponseBody extends $dara.Model {
  code?: string;
  data?: UploadTranslationFileResponseBodyData;
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
      data: UploadTranslationFileResponseBodyData,
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

