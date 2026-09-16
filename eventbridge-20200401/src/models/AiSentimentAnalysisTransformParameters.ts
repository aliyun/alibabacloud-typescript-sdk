// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiSentimentAnalysisTransformParameters extends $dara.Model {
  /**
   * @remarks
   * Performs emotion analysis on each specified aspect separately. If left empty, performs overall emotion analysis on the entire text.
   * 
   * @example
   * ["price","logistics","customer service"]
   */
  aspects?: string[];
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The field name attached to the CloudEvent for output. Default value: transform0.
   * 
   * @example
   * sentiment
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      aspects: 'Aspects',
      inputField: 'InputField',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspects: { 'type': 'array', 'itemType': 'string' },
      inputField: AiTransformField,
      stepName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aspects)) {
      $dara.Model.validateArray(this.aspects);
    }
    if(this.inputField && typeof (this.inputField as any).validate === 'function') {
      (this.inputField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

