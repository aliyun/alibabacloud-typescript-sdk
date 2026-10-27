// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserPropertyValueRequest extends $dara.Model {
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
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 240**
   */
  propertyId?: number;
  /**
   * @remarks
   * The property value ID. You can call the [ListProperty](~~ListProperty~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2251**
   */
  propertyValueId?: number;
  /**
   * @remarks
   * The user ID. You can call the [DescribeUsers](~~DescribeUsers~~) operation to obtain this parameter, which corresponds to the value of the `Id` response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 111****
   */
  userId?: number;
  /**
   * @remarks
   * The username. You can call the [DescribeUsers](~~DescribeUsers~~) operation to obtain this parameter, which corresponds to the value of the `EndUserId` response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

