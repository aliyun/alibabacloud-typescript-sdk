// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues } from "./CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues";
import { CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues } from "./CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues";


export class CreatePropertyResponseBodyCreateResultSavePropertyValueModel extends $dara.Model {
  /**
   * @remarks
   * The property values that failed to be created.
   */
  failedPropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues[];
  /**
   * @remarks
   * Details of the property values that were created.
   */
  savePropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.failedPropertyValues)) {
      $dara.Model.validateArray(this.failedPropertyValues);
    }
    if(Array.isArray(this.savePropertyValues)) {
      $dara.Model.validateArray(this.savePropertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

