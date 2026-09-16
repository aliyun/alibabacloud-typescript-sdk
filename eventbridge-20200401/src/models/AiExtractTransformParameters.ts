// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiExtractTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The JSON Schema of the extraction results. Pass a serialized JSON object string or JSON Schema text.
   * 
   * @example
   * {"type":"object","properties":{"orderId":{"type":"string"},"amount":{"type":"number"}}}
   */
  extractSchema?: string;
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
   * extract_result
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      extractSchema: 'ExtractSchema',
      inputField: 'InputField',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractSchema: 'string',
      inputField: AiTransformField,
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

