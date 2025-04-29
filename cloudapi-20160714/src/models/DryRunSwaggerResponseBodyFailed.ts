// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed } from "./DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed";


export class DryRunSwaggerResponseBodyFailed extends $dara.Model {
  apiImportSwaggerFailed?: DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed[];
  static names(): { [key: string]: string } {
    return {
      apiImportSwaggerFailed: 'ApiImportSwaggerFailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiImportSwaggerFailed: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed },
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

