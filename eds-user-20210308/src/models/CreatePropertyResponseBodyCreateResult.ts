// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePropertyResponseBodyCreateResultSavePropertyValueModel } from "./CreatePropertyResponseBodyCreateResultSavePropertyValueModel";


export class CreatePropertyResponseBodyCreateResult extends $dara.Model {
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
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The result of creating the property value.
   */
  savePropertyValueModel?: CreatePropertyResponseBodyCreateResultSavePropertyValueModel;
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
      savePropertyValueModel: CreatePropertyResponseBodyCreateResultSavePropertyValueModel,
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

