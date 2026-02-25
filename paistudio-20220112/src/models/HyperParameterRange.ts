// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HyperParameterRange extends $dara.Model {
  enum?: string[];
  /**
   * @example
   * true
   */
  exclusiveMaximum?: boolean;
  /**
   * @example
   * true
   */
  exclusiveMinimum?: boolean;
  /**
   * @example
   * 30
   */
  maxLength?: number;
  /**
   * @example
   * 10
   */
  maximum?: string;
  /**
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @example
   * 0
   */
  minimum?: string;
  /**
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

