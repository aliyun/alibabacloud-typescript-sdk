// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues } from "./DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues";


export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 123
   */
  propertyId?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * key
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property type.
   * 
   * Valid values:
   * 
   * *   1: system property
   * *   2: custom property
   * 
   * @example
   * 1
   */
  propertyType?: number;
  /**
   * @remarks
   * Details about property values.
   */
  propertyValues?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123
   */
  userId?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * nameDemo
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
      propertyValues: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues },
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

