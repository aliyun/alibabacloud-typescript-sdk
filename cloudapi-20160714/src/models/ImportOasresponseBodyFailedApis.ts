// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportOASResponseBodyFailedApisFailedApi } from "./ImportOasresponseBodyFailedApisFailedApi";


export class ImportOASResponseBodyFailedApis extends $dara.Model {
  failedApi?: ImportOASResponseBodyFailedApisFailedApi[];
  static names(): { [key: string]: string } {
    return {
      failedApi: 'FailedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedApi: { 'type': 'array', 'itemType': ImportOASResponseBodyFailedApisFailedApi },
    };
  }

  validate() {
    if(Array.isArray(this.failedApi)) {
      $dara.Model.validateArray(this.failedApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

