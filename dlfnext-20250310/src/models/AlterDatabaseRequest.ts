// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterDatabaseRequest extends $dara.Model {
  removals?: string[];
  updates?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      removals: 'removals',
      updates: 'updates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removals: { 'type': 'array', 'itemType': 'string' },
      updates: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.removals)) {
      $dara.Model.validateArray(this.removals);
    }
    if(this.updates) {
      $dara.Model.validateMap(this.updates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

