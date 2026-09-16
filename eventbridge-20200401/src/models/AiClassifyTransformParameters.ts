// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiClassifyTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The classification constraints provided to the model, such as priority rules or how to categorize uncertain cases. If left empty, classification is performed based on Labels only.
   * 
   * @example
   * Classify as bug when crash or exception is mentioned, classify as other when uncertain
   */
  instruction?: string;
  /**
   * @remarks
   * The candidate classification labels. The classification result must fall within this list. Specify at least two labels.
   * 
   * @example
   * ["bug","feature","question","other"]
   */
  labels?: string[];
  /**
   * @remarks
   * The output mode. Valid values: single: single-label. multi: multi-label. Default value: single.
   * 
   * @example
   * single
   */
  outputMode?: string;
  /**
   * @remarks
   * The field name in the CloudEvent to which the output is attached. Default value: transform0.
   * 
   * @example
   * classify_result
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      inputField: 'InputField',
      instruction: 'Instruction',
      labels: 'Labels',
      outputMode: 'OutputMode',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputField: AiTransformField,
      instruction: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      outputMode: 'string',
      stepName: 'string',
    };
  }

  validate() {
    if(this.inputField && typeof (this.inputField as any).validate === 'function') {
      (this.inputField as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

