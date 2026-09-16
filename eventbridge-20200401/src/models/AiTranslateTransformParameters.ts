// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiTranslateTransformParameters extends $dara.Model {
  inputField?: AiTransformField;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @example
   * translation
   */
  stepName?: string;
  /**
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

