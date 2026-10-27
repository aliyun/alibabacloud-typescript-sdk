// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The property ID. You can call [ListProperty](~~ListProperty~~) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The property value ID. You can call [ListProperty](~~ListProperty~~) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  /**
   * @remarks
   * The user ID. You can call [DescribeUsers](~~DescribeUsers~~) to obtain this parameter, which corresponds to the value of the `Id` response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

