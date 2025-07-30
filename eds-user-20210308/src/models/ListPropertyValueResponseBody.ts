// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPropertyValueResponseBodyPropertyValueInfos extends $dara.Model {
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
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

export class ListPropertyValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about property values.
   */
  propertyValueInfos?: ListPropertyValueResponseBodyPropertyValueInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C52013A5-3422-5D1F-B22C-A57110972AD9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyValueInfos: 'PropertyValueInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValueInfos: { 'type': 'array', 'itemType': ListPropertyValueResponseBodyPropertyValueInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValueInfos)) {
      $dara.Model.validateArray(this.propertyValueInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

