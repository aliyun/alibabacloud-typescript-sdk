// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiPrepSearchTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The maximum number of chunks. Valid values: 1 to 1000. Default value: 20.
   * 
   * @example
   * 20
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * The field name attached to the CloudEvent for output. Default value: transform0.
   * 
   * @example
   * chunks
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      inputField: 'InputField',
      maxChunkSize: 'MaxChunkSize',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputField: AiTransformField,
      maxChunkSize: 'number',
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

