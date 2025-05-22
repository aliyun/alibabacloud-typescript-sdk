// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The property value ID. You can call the [ListProperty](~~ListProperty~~) operation to query the property value ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  /**
   * @remarks
   * The user ID. You can call the [DescribeUsers](~~DescribeUsers~~) operation to query the user ID, which is the return value of the `Id` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

