// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ToolsetAuthorization extends $dara.Model {
  authConfig?: { [key: string]: string };
  /**
   * @example
   * apiKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.authConfig) {
      $dara.Model.validateMap(this.authConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

