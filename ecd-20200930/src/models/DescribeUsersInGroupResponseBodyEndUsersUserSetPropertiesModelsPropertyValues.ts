// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * value
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 123
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

