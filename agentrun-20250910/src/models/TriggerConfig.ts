// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerConfig extends $dara.Model {
  authType?: string;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

