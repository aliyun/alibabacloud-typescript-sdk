// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCoordinationRequest extends $dara.Model {
  coIds?: string[];
  static names(): { [key: string]: string } {
    return {
      coIds: 'CoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.coIds)) {
      $dara.Model.validateArray(this.coIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

