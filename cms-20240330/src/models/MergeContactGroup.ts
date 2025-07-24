// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContactGroup extends $dara.Model {
  contacts?: string[];
  extend?: { [key: string]: any };
  gmtCreate?: string;
  gmtModified?: string;
  identifier?: string;
  name?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

