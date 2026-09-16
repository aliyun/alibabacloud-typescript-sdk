// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiEmbedTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The vector dimensions. Must be a dimension supported by the selected model. If not specified, the default value of the model is used (1024 for most models, 1536 for v1/v2/async).
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The embedding model. Default value: text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  model?: string;
  /**
   * @remarks
   * The field name in the CloudEvent to which the output is attached. Default value: transform0.
   * 
   * @example
   * embedding
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      inputField: 'InputField',
      model: 'Model',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      inputField: AiTransformField,
      model: 'string',
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

