// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqQueryAbilityResponseBodyResultMetaType extends $dara.Model {
  /**
   * @remarks
   * Column tuple name.
   * 
   * @example
   * Polar***STPS
   */
  key?: string;
  /**
   * **if can be null:**
   * true
   */
  type?: string;
  /**
   * @remarks
   * Column tuple type.
   * 
   * @example
   * string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

