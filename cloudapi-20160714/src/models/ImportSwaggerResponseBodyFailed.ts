// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportSwaggerResponseBodyFailedApiImportSwaggerFailed } from "./ImportSwaggerResponseBodyFailedApiImportSwaggerFailed";


export class ImportSwaggerResponseBodyFailed extends $dara.Model {
  apiImportSwaggerFailed?: ImportSwaggerResponseBodyFailedApiImportSwaggerFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerFailed: 'ApiImportSwaggerFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerFailed: { 'type': 'array', 'itemType': ImportSwaggerResponseBodyFailedApiImportSwaggerFailed },
    };
  }

  validate() {
    if(Array.isArray(this.apiImportSwaggerFailed)) {
      $dara.Model.validateArray(this.apiImportSwaggerFailed);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

