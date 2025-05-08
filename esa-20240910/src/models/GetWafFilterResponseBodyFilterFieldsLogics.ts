// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWafFilterResponseBodyFilterFieldsLogicsValidator } from "./GetWafFilterResponseBodyFilterFieldsLogicsValidator";


export class GetWafFilterResponseBodyFilterFieldsLogics extends $dara.Model {
  /**
   * @remarks
   * A custom attribute. For example, this parameter can specify whether the value is case-sensitive.
   * 
   * @example
   * 1
   */
  attributes?: number;
  enable?: boolean;
  /**
   * @remarks
   * The type of the value input box. Valid values:
   * 
   * *   select:single
   * *   select:multi
   * *   input:single
   * *   input:multi
   * 
   * @example
   * input:single
   */
  kind?: string;
  minPlan?: string;
  /**
   * @remarks
   * Indicates whether the match result is inverted.
   */
  negative?: boolean;
  /**
   * @remarks
   * The displayed matching characters.
   * 
   * @example
   * Does not equal
   */
  operator?: string;
  /**
   * @remarks
   * The matching characters in the system.
   * 
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @remarks
   * The tip on how to enter a valid value that is required by the rules.
   * 
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * 
   * *   integer
   * *   integer_slice
   * *   string
   * *   string_slice
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The validator, which defines the validation rules for a value.
   */
  validator?: GetWafFilterResponseBodyFilterFieldsLogicsValidator;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      enable: 'Enable',
      kind: 'Kind',
      minPlan: 'MinPlan',
      negative: 'Negative',
      operator: 'Operator',
      symbol: 'Symbol',
      tip: 'Tip',
      type: 'Type',
      validator: 'Validator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'number',
      enable: 'boolean',
      kind: 'string',
      minPlan: 'string',
      negative: 'boolean',
      operator: 'string',
      symbol: 'string',
      tip: 'string',
      type: 'string',
      validator: GetWafFilterResponseBodyFilterFieldsLogicsValidator,
    };
  }

  validate() {
    if(this.validator && typeof (this.validator as any).validate === 'function') {
      (this.validator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

