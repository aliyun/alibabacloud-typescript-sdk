// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAssetTagRequest extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * This is a description.
   */
  description?: string;
  /**
   * @remarks
   * The label key.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The list of label administrators.
   */
  managers?: string[];
  /**
   * @remarks
   * The list of label values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      managers: 'Managers',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      managers: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.managers)) {
      $dara.Model.validateArray(this.managers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

