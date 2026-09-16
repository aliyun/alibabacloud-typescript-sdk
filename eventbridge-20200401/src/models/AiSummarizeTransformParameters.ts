// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiSummarizeTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The maximum summary length. The value must be a positive integer. Default value: 200.
   * 
   * @example
   * 200
   */
  maxLength?: number;
  /**
   * @remarks
   * The field name attached to the CloudEvent for output. Default value: transform0.
   * 
   * @example
   * summary
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      inputField: 'InputField',
      maxLength: 'MaxLength',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputField: AiTransformField,
      maxLength: 'number',
      stepName: 'string',
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

