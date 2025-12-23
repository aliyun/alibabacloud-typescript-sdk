// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushInterventionDictionaryEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: { [key: string]: any }[];
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

