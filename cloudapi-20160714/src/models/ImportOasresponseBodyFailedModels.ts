// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportOASResponseBodyFailedModelsFailedModel } from "./ImportOasresponseBodyFailedModelsFailedModel";


export class ImportOASResponseBodyFailedModels extends $dara.Model {
  failedModel?: ImportOASResponseBodyFailedModelsFailedModel[];
  static names(): { [key: string]: string } {
    return {
      failedModel: 'FailedModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedModel: { 'type': 'array', 'itemType': ImportOASResponseBodyFailedModelsFailedModel },
    };
  }

  validate() {
    if(Array.isArray(this.failedModel)) {
      $dara.Model.validateArray(this.failedModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

