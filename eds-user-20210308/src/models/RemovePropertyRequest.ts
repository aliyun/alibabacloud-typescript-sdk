// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the property. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

