// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues } from "./FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues";


export class FilterUsersResponseBodyUsersUserSetPropertiesModels extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 12
   */
  propertyId?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property type.
   * 
   * @example
   * 2
   */
  propertyType?: number;
  /**
   * @remarks
   * The property values.
   */
  propertyValues?: FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues[];
  /**
   * @remarks
   * The ID of the convenience user that is bound to the property.
   * 
   * @example
   * 12345
   */
  userId?: number;
  /**
   * @remarks
   * The username of the convenience user that is bound to the property.
   * 
   * @example
   * testName
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
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

