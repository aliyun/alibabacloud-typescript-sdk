// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableBusinessMetadataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The values of custom attributes. The key specifies the identifier of a custom attribute, and the value is an array that can contain at most one item. To delete the value for an attribute, pass an empty array. To update only custom attributes, omit the `Readme` parameter to prevent its existing value from being cleared. To leave the custom attributes unchanged, pass an empty object `{}`.
   * 
   * @example
   * {"biz_owner":["张三"]}
   */
  customAttributesShrink?: string;
  /**
   * @remarks
   * The table ID. For the required format, see the response of the `ListTables` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  id?: string;
  /**
   * @remarks
   * The Readme of the table, which supports rich text format.
   * 
   * @example
   * ## introduction
   */
  readme?: string;
  static names(): { [key: string]: string } {
    return {
      customAttributesShrink: 'CustomAttributes',
      id: 'Id',
      readme: 'Readme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttributesShrink: 'string',
      id: 'string',
      readme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

