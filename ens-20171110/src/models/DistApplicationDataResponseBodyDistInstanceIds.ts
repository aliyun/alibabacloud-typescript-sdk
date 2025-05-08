// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistApplicationDataResponseBodyDistInstanceIds extends $dara.Model {
  distInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      distInstanceId: 'DistInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.distInstanceId)) {
      $dara.Model.validateArray(this.distInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

