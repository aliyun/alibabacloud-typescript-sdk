// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranslationTaskRequestConfig extends $dara.Model {
  font?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceLanguage?: string;
  style?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      font: 'Font',
      sourceLanguage: 'SourceLanguage',
      style: 'Style',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SubmitTranslationTaskRequest extends $dara.Model {
  APIKey?: string;
  baseTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  config?: SubmitTranslationTaskRequestConfig;
  customTerms?: SubmitTranslationTaskRequestCustomTerms[];
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

