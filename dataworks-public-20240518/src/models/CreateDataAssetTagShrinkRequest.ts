// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAssetTagShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * This is a description
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
   * The type of the tag value. Valid values:
   * 
   * *   Boolean
   * *   Int
   * *   String
   * *   Double
   * 
   * @example
   * String
   */
  valueType?: string;
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
      valueType: 'ValueType',
      valuesShrink: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      managersShrink: 'string',
      valueType: 'string',
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

