// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupConfiguration extends $dara.Model {
  fields?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

