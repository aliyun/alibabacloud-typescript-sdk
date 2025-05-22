// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel } from "./UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel";


export class UpdatePropertyResponseBodyUpdateResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * testkey2
   */
  propertyKey?: string;
  /**
   * @remarks
   * The result of the property value modification.
   */
  savePropertyValueModel?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel,
    };
  }

  validate() {
    if(this.savePropertyValueModel && typeof (this.savePropertyValueModel as any).validate === 'function') {
      (this.savePropertyValueModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

