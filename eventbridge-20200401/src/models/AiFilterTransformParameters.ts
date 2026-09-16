// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiFilterTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The retention condition described in natural language. The model uses this condition to determine whether an event matches.
   * 
   * @example
   * Retain only content related to user complaints or refunds
   */
  condition?: string;
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The behavior when a mismatch occurs. Valid values: discard (default): discards the event. forward: forwards the event as-is.
   * 
   * @example
   * discard
   */
  onMismatch?: string;
  /**
   * @remarks
   * The field name in the CloudEvent to which the output is attached. Default value: transform0.
   * 
   * @example
   * filter_result
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      inputField: 'InputField',
      onMismatch: 'OnMismatch',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      inputField: AiTransformField,
      onMismatch: 'string',
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

