// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePropertyRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The property name.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The values of the property. You can specify up to 50 values for a property.
   */
  propertyValues?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': 'string' },
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

