// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBlockRequestScopesBlockScopeBgSystem extends $dara.Model {
  relateCodes?: string[];
  selfCodeName?: string;
  static names(): { [key: string]: string } {
    return {
      relateCodes: 'RelateCodes',
      selfCodeName: 'SelfCodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relateCodes: { 'type': 'array', 'itemType': 'string' },
      selfCodeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relateCodes)) {
      $dara.Model.validateArray(this.relateCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

