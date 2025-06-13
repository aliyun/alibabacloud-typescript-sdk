// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAScriptsRequestAScriptsExtAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * Set the value to **EsDebug**, which specifies that when requests carry the _es_dbg parameter whose value is the specified key, the debugging header is enabled to output the execution result.
   * 
   * This parameter is required.
   * 
   * @example
   * EsDebug
   */
  attributeKey?: string;
  /**
   * @remarks
   * The attribute value, which must be 1 to 128 characters in length, and can contain letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * test123
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

