// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExistedPropertyValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The property value is used by another property.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

