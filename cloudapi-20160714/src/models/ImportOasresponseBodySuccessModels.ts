// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportOASResponseBodySuccessModelsSuccessModel } from "./ImportOasresponseBodySuccessModelsSuccessModel";


export class ImportOASResponseBodySuccessModels extends $dara.Model {
  successModel?: ImportOASResponseBodySuccessModelsSuccessModel[];
  static names(): { [key: string]: string } {
    return {
      successModel: 'SuccessModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successModel: { 'type': 'array', 'itemType': ImportOASResponseBodySuccessModelsSuccessModel },
    };
  }

  validate() {
    if(Array.isArray(this.successModel)) {
      $dara.Model.validateArray(this.successModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

