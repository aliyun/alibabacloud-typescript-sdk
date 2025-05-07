// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateViewPointRequestReferenceData extends $dara.Model {
  miniDoc?: string[];
  static names(): { [key: string]: string } {
    return {
      miniDoc: 'MiniDoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniDoc: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

