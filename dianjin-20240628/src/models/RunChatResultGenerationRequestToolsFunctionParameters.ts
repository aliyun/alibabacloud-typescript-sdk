// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunChatResultGenerationRequestToolsFunctionParameters extends $dara.Model {
  /**
   * @example
   * {
   *                             "location": {
   *                                 "type": "string",
   *                                 "description": "The city and state, e.g. San Francisco, CA"
   *                             },
   *                             "unit": {
   *                                 "type": "string",
   *                                 "enum": [
   *                                     "celsius",
   *                                     "fahrenheit"
   *                                 ]
   *                             }
   *                         }
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

