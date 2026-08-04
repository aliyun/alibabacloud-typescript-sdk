// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HyperParameterRange extends $dara.Model {
  /**
   * @remarks
   * Hyperparameter enumeration list.
   */
  enum?: string[];
  /**
   * @remarks
   * Whether the maximum value is exclusive.
   * 
   * @example
   * true
   */
  exclusiveMaximum?: boolean;
  /**
   * @remarks
   * Whether the minimum value is exclusive.
   * 
   * @example
   * true
   */
  exclusiveMinimum?: boolean;
  /**
   * @remarks
   * Maximum length.
   * 
   * @example
   * 30
   */
  maxLength?: number;
  /**
   * @remarks
   * Maximum value.
   * 
   * @example
   * 10
   */
  maximum?: string;
  /**
   * @remarks
   * Minimum length.
   * 
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @remarks
   * Minimum value.
   * 
   * @example
   * 0
   */
  minimum?: string;
  /**
   * @remarks
   * Regular expression.
   * 
   * @example
   * ^\\+?[1-9][0-9]*$
   */
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      enum: 'Enum',
      exclusiveMaximum: 'ExclusiveMaximum',
      exclusiveMinimum: 'ExclusiveMinimum',
      maxLength: 'MaxLength',
      maximum: 'Maximum',
      minLength: 'MinLength',
      minimum: 'Minimum',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enum: { 'type': 'array', 'itemType': 'string' },
      exclusiveMaximum: 'boolean',
      exclusiveMinimum: 'boolean',
      maxLength: 'number',
      maximum: 'string',
      minLength: 'number',
      minimum: 'string',
      pattern: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enum)) {
      $dara.Model.validateArray(this.enum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

