// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePropertyRequestPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The updated property value.
   * 
   * @example
   * testvalue
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the updated property value.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
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

export class UpdatePropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The ID of the property to update. You can call [ListProperty](~~ListProperty~~) to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The updated property name.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey
   */
  propertyKey?: string;
  /**
   * @remarks
   * The list of all updated property values for the property.
   * 
   * >Notice: The property values specified here overwrite the existing property values instead of appending to them.
   */
  propertyValues?: UpdatePropertyRequestPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': UpdatePropertyRequestPropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

