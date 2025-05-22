// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserPropertyValueRequest extends $dara.Model {
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
   * The ID of the property value. You can call the [ListProperty](~~ListProperty~~) operation to query the ID of the property value.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  /**
   * @remarks
   * The ID of the convenience user. You can call the [DescribeUsers](~~DescribeUsers~~) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  userId?: number;
  /**
   * @remarks
   * The username of the convenience user.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

