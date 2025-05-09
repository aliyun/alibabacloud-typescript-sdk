// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAssetTagRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * This is a description.
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag administrators.
   */
  managers?: string[];
  /**
   * @remarks
   * The tag values.
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

