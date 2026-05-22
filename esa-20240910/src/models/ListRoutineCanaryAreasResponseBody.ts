// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCanaryAreasResponseBody extends $dara.Model {
  canaryAreas?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canaryAreas: 'CanaryAreas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canaryAreas: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canaryAreas)) {
      $dara.Model.validateArray(this.canaryAreas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

