// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiTranslateTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The source language. If left empty, the language is automatically detected.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The field name attached to the CloudEvent output. Default value: transform0.
   * 
   * @example
   * translation
   */
  stepName?: string;
  /**
   * @remarks
   * The target language.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      inputField: 'InputField',
      sourceLanguage: 'SourceLanguage',
      stepName: 'StepName',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputField: AiTransformField,
      sourceLanguage: 'string',
      stepName: 'string',
      targetLanguage: 'string',
    };
  }

  validate() {
    if(this.inputField && typeof (this.inputField as any).validate === 'function') {
      (this.inputField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

