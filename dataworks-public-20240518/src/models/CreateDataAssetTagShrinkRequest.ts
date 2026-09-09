// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAssetTagShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * This is a description
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
  managersShrink?: string;
  /**
   * @remarks
   * The label value type. Valid values:
   * - Boolean
   * - Int
   * - String
   * - Double
   * 
   * @example
   * String
   */
  valueType?: string;
  /**
   * @remarks
   * The list of label values.
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

