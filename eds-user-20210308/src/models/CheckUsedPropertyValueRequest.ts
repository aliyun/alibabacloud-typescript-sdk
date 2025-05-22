// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUsedPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to query property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 380
   */
  propertyId?: number;
  /**
   * @remarks
   * The ID of the property value. You can call the [ListProperty](~~ListProperty~~) operation to query the ID of the property value.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

