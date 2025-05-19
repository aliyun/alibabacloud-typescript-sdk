// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsResponseBodyFcParametersFcParameter } from "./PutEventTargetsResponseBodyFcParametersFcParameter";


export class PutEventTargetsResponseBodyFcParameters extends $dara.Model {
  fcParameter?: PutEventTargetsResponseBodyFcParametersFcParameter[];
  static names(): { [key: string]: string } {
    return {
      fcParameter: 'FcParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcParameter: { 'type': 'array', 'itemType': PutEventTargetsResponseBodyFcParametersFcParameter },
    };
  }

  validate() {
    if(Array.isArray(this.fcParameter)) {
      $dara.Model.validateArray(this.fcParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

