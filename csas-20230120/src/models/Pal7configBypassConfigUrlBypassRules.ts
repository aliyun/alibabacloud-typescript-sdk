// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAL7ConfigBypassConfigUrlBypassRules extends $dara.Model {
  froms?: string[];
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      froms: 'Froms',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      froms: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.froms)) {
      $dara.Model.validateArray(this.froms);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

