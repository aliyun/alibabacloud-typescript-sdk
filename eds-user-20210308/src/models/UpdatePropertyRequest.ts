// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePropertyRequestPropertyValues } from "./UpdatePropertyRequestPropertyValues";


export class UpdatePropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the property that you want to modify. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The new property name.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey
   */
  propertyKey?: string;
  /**
   * @remarks
   * The values of property.
   */
  propertyValues?: UpdatePropertyRequestPropertyValues[];
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

