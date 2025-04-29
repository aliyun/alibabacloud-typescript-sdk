// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess } from "./DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess";


export class DryRunSwaggerResponseBodySuccess extends $dara.Model {
  apiDryRunSwaggerSuccess?: DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess[];
  static names(): { [key: string]: string } {
    return {
      apiDryRunSwaggerSuccess: 'ApiDryRunSwaggerSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDryRunSwaggerSuccess: { 'type': 'array', 'itemType': DryRunSwaggerResponseBodySuccessApiDryRunSwaggerSuccess },
    };
  }

  validate() {
    if(Array.isArray(this.apiDryRunSwaggerSuccess)) {
      $dara.Model.validateArray(this.apiDryRunSwaggerSuccess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

