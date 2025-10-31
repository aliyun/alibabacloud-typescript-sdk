// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceLabelRequest extends $dara.Model {
  /**
   * @remarks
   * The service tags that you want to delete.
   * 
   * @deprecated
   */
  keys?: string[];
  labelKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      labelKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.labelKeys)) {
      $dara.Model.validateArray(this.labelKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

