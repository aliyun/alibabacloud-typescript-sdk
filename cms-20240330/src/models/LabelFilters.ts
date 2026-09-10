// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LabelFilters extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * env
   */
  name?: string;
  /**
   * @remarks
   * The label filter operator. Supported operators: = (equal to), != (not equal to), =~ (regular expression match), and !~ (regular expression not match).
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

