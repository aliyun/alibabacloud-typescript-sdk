// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAScriptsRequestAScriptsExtAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * Set the value to **EsDebug**, which specifies that if requests carry the _es_dbg parameter and the value is the specified key, the debugging header is enabled to output the execution result.
   * 
   * @example
   * EsDebug
   */
  attributeKey?: string;
  /**
   * @remarks
   * The attribute value, which must be 1 to 128 characters in length, and can contain letters or digits.
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

