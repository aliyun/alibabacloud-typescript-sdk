// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues } from "./UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues";
import { UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues } from "./UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues";


export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel extends $dara.Model {
  /**
   * @remarks
   * The property values that failed to be modified.
   */
  failedPropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues[];
  /**
   * @remarks
   * The property values that were modified.
   */
  savePropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues },
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

