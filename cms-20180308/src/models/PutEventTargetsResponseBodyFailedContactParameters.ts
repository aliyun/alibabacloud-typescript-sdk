// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsResponseBodyFailedContactParametersContactParameter } from "./PutEventTargetsResponseBodyFailedContactParametersContactParameter";


export class PutEventTargetsResponseBodyFailedContactParameters extends $dara.Model {
  contactParameter?: PutEventTargetsResponseBodyFailedContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': PutEventTargetsResponseBodyFailedContactParametersContactParameter },
    };
  }

  validate() {
    if(Array.isArray(this.contactParameter)) {
      $dara.Model.validateArray(this.contactParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

