// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportSwaggerResponseBodyModelFailedApiImportModelFailed } from "./ImportSwaggerResponseBodyModelFailedApiImportModelFailed";


export class ImportSwaggerResponseBodyModelFailed extends $dara.Model {
  apiImportModelFailed?: ImportSwaggerResponseBodyModelFailedApiImportModelFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelFailed: 'ApiImportModelFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelFailed: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyModelFailedApiImportModelFailed },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportModelFailed)) {
      $dara.Model.validateArray(this.apiImportModelFailed);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

