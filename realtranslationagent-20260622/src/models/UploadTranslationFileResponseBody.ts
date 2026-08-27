// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadTranslationFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the estimated Credits billing and time consumption for the task.
   * 
   * @example
   * docx: 0.002 creadits/word × 1000 words (original 2 characters rounded up to nearest thousand) / 1000 = 0.002
   */
  creditBreakdown?: string;
  /**
   * @remarks
   * Indicates whether the available Credits are sufficient for this translation task.
   * - The estimate may be affected by various factors and may deviate. The actual result is based on the task submission operation.
   * 
   * @example
   * True
   */
  creditsAvailable?: boolean;
  /**
   * @remarks
   * The detected language type.
   * 
   * @example
   * zh
   */
  detectedLang?: string;
  /**
   * @remarks
   * The estimated Credits consumption.
   * 
   * @example
   * 3.0021
   */
  estimatedCostCredits?: number;
  /**
   * @remarks
   * The estimated translation time in **seconds**.
   * 
   * @example
   * 60000
   */
  estimatedTime?: number;
  /**
   * @remarks
   * The languages that support font modification and the corresponding font lists. The key of the map identifies the language type.
   * - Currently supported fonts include: English, French, Indonesian, and Japanese.
   */
  fonts?: { [key: string]: string[] };
  /**
   * @remarks
   * The page count of the uploaded file.
   * 
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @remarks
   * Indicates whether sensitive information was detected.
   * 
   * @example
   * True
   */
  sensitiveDetected?: boolean;
  /**
   * @remarks
   * The keywords that matched sensitive information.
   */
  sensitiveTags?: string[];
  /**
   * @remarks
   * The translation task ID, used for subsequent task submission.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  /**
   * @remarks
   * The word count of the uploaded file.
   * 
   * @example
   * 2000
   */
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
  data?: UploadTranslationFileResponseBodyData;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F60AC23C-27A7-5376-9A68-0B6EF2D4F9E4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

