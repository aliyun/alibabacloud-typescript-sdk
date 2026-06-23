// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateColumnBusinessMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The custom attributes of the column, specified as key-value pairs. The key is the attribute identifier, and the value is an array that can contain at most one element. An empty array deletes the attribute\\"s value. To avoid overwriting the column\\"s business description, omit the `Description` parameter from the request. An empty object (`{}`) indicates that no custom attributes are updated.
   * 
   * @example
   * {"biz_owner":["张三"]}
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The business description of the column.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the column. You can obtain this ID from the response of the `ListColumns` operation. For more information, see [Metadata Entity Concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-column:::project_name:[schema_name]:table_name:column_name
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      customAttributes: 'CustomAttributes',
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      description: 'string',
      id: 'string',
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

