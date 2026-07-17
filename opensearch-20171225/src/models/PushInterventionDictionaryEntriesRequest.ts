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
   * Specifies whether to validate the request parameters without creating the attribution configuration. The default value is false.
   * 
   * Valid values:
   * 
   * - **true**: Validates the request parameters only.
   * 
   * - **false**: Validates the request parameters and creates the attribution configuration.
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

