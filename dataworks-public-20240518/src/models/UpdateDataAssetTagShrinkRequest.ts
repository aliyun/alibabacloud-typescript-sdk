// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAssetTagShrinkRequest extends $dara.Model {
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
  managersShrink?: string;
  /**
   * @remarks
   * The tag values.
   */
  valuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      managersShrink: 'Managers',
      valuesShrink: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      managersShrink: 'string',
      valuesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

