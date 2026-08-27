// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranslationTaskRequestConfig extends $dara.Model {
  agent?: string;
  /**
   * @remarks
   * The font.
   * - For new tasks, obtain this from UploadTranslationFile.
   * - For retranslation of historical tasks, obtain this from GetTranslationTask.
   * 
   * @example
   * Arial
   */
  font?: string;
  /**
   * @remarks
   * The language of the source file.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The translation style. This parameter takes effect only when the translation file is a PPT file.
   * 
   * @example
   * minimal
   */
  style?: string;
  /**
   * @remarks
   * The target language.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      font: 'Font',
      sourceLanguage: 'SourceLanguage',
      style: 'Style',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      font: 'string',
      sourceLanguage: 'string',
      style: 'string',
      targetLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTranslationTaskRequestCustomTerms extends $dara.Model {
  /**
   * @remarks
   * The source term.
   * 
   * @example
   * dog
   */
  sourceTerm?: string;
  /**
   * @remarks
   * The target term.
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

export class SubmitTranslationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The API key that is the identity of the member accounts. You can obtain this from the RuiYiBao console.
   * 
   * @example
   * ***
   */
  APIKey?: string;
  /**
   * @remarks
   * The task ID of a previously submitted translation task. Pass in this parameter when resubmitting a translation task.
   * - You must pass in either this parameter or TaskId.
   * 
   * @example
   * f9c35b0453b
   */
  baseTaskId?: string;
  /**
   * @remarks
   * The translation configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *         "SourceLanguage": "zh",
   *         "TargetLanguage": "en",
   *         "Style": "minimal",
   *         "Font": "Arial"
   *     }
   */
  config?: SubmitTranslationTaskRequestConfig;
  /**
   * @remarks
   * The custom terms.
   * >Notice: Custom terms are for reference only. The actual translation results may differ. Refer to the final output as the definitive result.</notice>
   * 
   * @example
   * [{"SourceTerm":"dog", "TargetTerm":"dog"}]
   */
  customTerms?: SubmitTranslationTaskRequestCustomTerms[];
  /**
   * @remarks
   * The translation task ID.
   * - Obtained from the TaskId returned by UploadTranslationFile.
   * - You must pass in either this parameter or BaseTaskId.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      baseTaskId: 'BaseTaskId',
      config: 'Config',
      customTerms: 'CustomTerms',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      baseTaskId: 'string',
      config: SubmitTranslationTaskRequestConfig,
      customTerms: { 'type': 'array', 'itemType': SubmitTranslationTaskRequestCustomTerms },
      taskId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.customTerms)) {
      $dara.Model.validateArray(this.customTerms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

