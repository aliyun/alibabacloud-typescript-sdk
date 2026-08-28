// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationRuleRequest extends $dara.Model {
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

