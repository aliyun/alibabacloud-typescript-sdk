// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersShrinkRequestPropertyFilterParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 123
   */
  propertyId?: number;
  /**
   * @remarks
   * The IDs of the property values.
   * 
   * @example
   * test
   */
  propertyValueIds?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueIds: 'PropertyValueIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

