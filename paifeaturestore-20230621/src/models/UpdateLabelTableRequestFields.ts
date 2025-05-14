// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLabelTableRequestFields extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lat
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DOUBLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

