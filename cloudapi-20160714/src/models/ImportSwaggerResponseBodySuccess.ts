// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess } from "./ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess";


export class ImportSwaggerResponseBodySuccess extends $dara.Model {
  apiImportSwaggerSuccess?: ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerSuccess: 'ApiImportSwaggerSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerSuccess: { 'type': 'array', 'itemType': ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportSwaggerSuccess)) {
      $dara.Model.validateArray(this.apiImportSwaggerSuccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

