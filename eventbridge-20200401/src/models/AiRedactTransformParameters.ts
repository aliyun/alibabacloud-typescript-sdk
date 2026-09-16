// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiRedactTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The entity types to identify and mask in the text, such as phone numbers, ID card numbers, and email addresses.
   * 
   * @example
   * ["PHONE","ID_CARD","EMAIL"]
   */
  entities?: string[];
  /**
   * @remarks
   * The input text field.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The mask character used in mask mode. Default value: *.
   * 
   * @example
   * *
   */
  maskChar?: string;
  /**
   * @remarks
   * The masking mode. Valid values: mask, replace, and remove.
   * 
   * @example
   * mask
   */
  mode?: string;
  /**
   * @remarks
   * The field name appended to the CloudEvent for output. Default value: transform0.
   * 
   * @example
   * redact_result
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      inputField: 'InputField',
      maskChar: 'MaskChar',
      mode: 'Mode',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': 'string' },
      inputField: AiTransformField,
      maskChar: 'string',
      mode: 'string',
      stepName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
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

