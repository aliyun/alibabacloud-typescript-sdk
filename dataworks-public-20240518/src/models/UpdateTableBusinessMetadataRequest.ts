// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableBusinessMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The custom attribute values. The key is the custom attribute identifier, and the value contains at most one element. An empty list indicates that the attribute value is deleted. Passing this parameter without Readme prevents the usage description from being cleared. An empty object indicates that custom attributes are not updated.
   * 
   * @example
   * {"biz_owner":["张三"]}
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The ID of the table. For the format, refer to the response of the ListTables operation.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  id?: string;
  /**
   * @remarks
   * The usage description. Rich text format is supported.
   * 
   * @example
   * ## introduction
   */
  readme?: string;
  static names(): { [key: string]: string } {
    return {
      customAttributes: 'CustomAttributes',
      id: 'Id',
      readme: 'Readme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      id: 'string',
      readme: 'string',
    };
  }

  validate() {
    if(this.customAttributes) {
      $dara.Model.validateMap(this.customAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

