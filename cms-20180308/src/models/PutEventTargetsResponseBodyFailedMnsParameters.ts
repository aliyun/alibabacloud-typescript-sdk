// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsResponseBodyFailedMnsParametersMnsParameter } from "./PutEventTargetsResponseBodyFailedMnsParametersMnsParameter";


export class PutEventTargetsResponseBodyFailedMnsParameters extends $dara.Model {
  mnsParameter?: PutEventTargetsResponseBodyFailedMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': PutEventTargetsResponseBodyFailedMnsParametersMnsParameter },
    };
  }

  validate() {
    if(Array.isArray(this.mnsParameter)) {
      $dara.Model.validateArray(this.mnsParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

