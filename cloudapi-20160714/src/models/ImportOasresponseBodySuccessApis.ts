// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportOASResponseBodySuccessApisSuccessApi } from "./ImportOasresponseBodySuccessApisSuccessApi";


export class ImportOASResponseBodySuccessApis extends $dara.Model {
  successApi?: ImportOASResponseBodySuccessApisSuccessApi[];
  static names(): { [key: string]: string } {
    return {
      successApi: 'SuccessApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successApi: { 'type': 'array', 'itemType': ImportOASResponseBodySuccessApisSuccessApi },
    };
  }

  validate() {
    if(Array.isArray(this.successApi)) {
      $dara.Model.validateArray(this.successApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

