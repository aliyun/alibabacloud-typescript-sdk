// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkItemRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * subject
   */
  fieldType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e8b2xxxxxx2abdxxxxxxxx23
   */
  identifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * subject
   */
  propertyKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * newValue
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldType: 'fieldType',
      identifier: 'identifier',
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldType: 'string',
      identifier: 'string',
      propertyKey: 'string',
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

