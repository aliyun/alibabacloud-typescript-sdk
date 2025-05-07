// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRuleResponseBodyData extends $dara.Model {
  ridInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      ridInfo: 'RidInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ridInfo)) {
      $dara.Model.validateArray(this.ridInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

