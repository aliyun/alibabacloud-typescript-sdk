// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryAnalysisRequestFunctions extends $dara.Model {
  name?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

