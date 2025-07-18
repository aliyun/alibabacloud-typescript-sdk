// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructIdpWuyingSubConfig extends $dara.Model {
  aliuids?: string[];
  static names(): { [key: string]: string } {
    return {
      aliuids: 'Aliuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aliuids)) {
      $dara.Model.validateArray(this.aliuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

