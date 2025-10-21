// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeExecutionContextDTO extends $dara.Model {
  context?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      context: 'context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.context) {
      $dara.Model.validateMap(this.context);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

