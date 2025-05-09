// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataAssetTagShrinkRequest extends $dara.Model {
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
   * The tag values.
   */
  valuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      valuesShrink: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

