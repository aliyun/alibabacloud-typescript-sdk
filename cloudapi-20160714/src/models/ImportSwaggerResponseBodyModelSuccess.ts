// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess } from "./ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess";


export class ImportSwaggerResponseBodyModelSuccess extends $dara.Model {
  apiImportModelSuccess?: ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportModelSuccess: 'ApiImportModelSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportModelSuccess: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportModelSuccess)) {
      $dara.Model.validateArray(this.apiImportModelSuccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

