// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPropertyResponseBodyPropertiesPropertyValues } from "./ListPropertyResponseBodyPropertiesPropertyValues";


export class ListPropertyResponseBodyProperties extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 30
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
   * Details about the property values.
   */
  propertyValues?: ListPropertyResponseBodyPropertiesPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': ListPropertyResponseBodyPropertiesPropertyValues },
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

