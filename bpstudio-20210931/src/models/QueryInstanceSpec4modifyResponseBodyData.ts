// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryInstanceSpec4ModifyResponseBodyDataOptionalValues } from "./QueryInstanceSpec4modifyResponseBodyDataOptionalValues";


export class QueryInstanceSpec4ModifyResponseBodyData extends $dara.Model {
  optionalValues?: QueryInstanceSpec4ModifyResponseBodyDataOptionalValues[];
  static names(): { [key: string]: string } {
    return {
      optionalValues: 'OptionalValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionalValues: { 'type': 'array', 'itemType': QueryInstanceSpec4ModifyResponseBodyDataOptionalValues },
    };
  }

  validate() {
    if(Array.isArray(this.optionalValues)) {
      $dara.Model.validateArray(this.optionalValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

