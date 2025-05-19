// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsResponseBodyContactParametersContactParameter } from "./PutEventTargetsResponseBodyContactParametersContactParameter";


export class PutEventTargetsResponseBodyContactParameters extends $dara.Model {
  contactParameter?: PutEventTargetsResponseBodyContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': PutEventTargetsResponseBodyContactParametersContactParameter },
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

