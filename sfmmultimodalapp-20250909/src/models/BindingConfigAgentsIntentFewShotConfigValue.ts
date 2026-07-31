// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindingConfigAgentsIntentFewShotConfigValue extends $dara.Model {
  query?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

