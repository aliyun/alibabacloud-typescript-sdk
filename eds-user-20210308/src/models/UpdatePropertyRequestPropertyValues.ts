// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePropertyRequestPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The new property value.
   * 
   * @example
   * testvalue
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of property value that you want to modify. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property value ID.
   * 
   * @example
   * 978
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

