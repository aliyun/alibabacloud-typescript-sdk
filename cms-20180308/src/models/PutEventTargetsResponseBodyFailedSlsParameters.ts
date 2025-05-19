// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsResponseBodyFailedSlsParametersFailedSlsParameter } from "./PutEventTargetsResponseBodyFailedSlsParametersFailedSlsParameter";


export class PutEventTargetsResponseBodyFailedSlsParameters extends $dara.Model {
  failedSlsParameter?: PutEventTargetsResponseBodyFailedSlsParametersFailedSlsParameter[];
  static names(): { [key: string]: string } {
    return {
      failedSlsParameter: 'FailedSlsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedSlsParameter: { 'type': 'array', 'itemType': PutEventTargetsResponseBodyFailedSlsParametersFailedSlsParameter },
    };
  }

  validate() {
    if(Array.isArray(this.failedSlsParameter)) {
      $dara.Model.validateArray(this.failedSlsParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

