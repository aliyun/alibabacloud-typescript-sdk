// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldContentValueFieldList extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * ClientIp
   */
  fieldName?: string;
  /**
   * @remarks
   * The English description of the field.
   * 
   * @example
   * IP address of the client.
   */
  description?: string;
  /**
   * @remarks
   * The Chinese description of the field.
   * 
   * @example
   * IP
   */
  descriptionCn?: string;
  /**
   * @remarks
   * The category to which the field belongs.
   * 
   * @example
   * Client
   */
  category?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The sort order of the field in the response.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * Specifies whether the field is provided by default.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Specifies whether the user plan supports the field.
   * 
   * @example
   * false
   */
  isSupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      description: 'Description',
      descriptionCn: 'DescriptionCn',
      category: 'Category',
      dataType: 'DataType',
      sortOrder: 'SortOrder',
      isDefault: 'IsDefault',
      isSupported: 'IsSupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      description: 'string',
      descriptionCn: 'string',
      category: 'string',
      dataType: 'string',
      sortOrder: 'number',
      isDefault: 'boolean',
      isSupported: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FieldContentValue extends $dara.Model {
  /**
   * @remarks
   * The sort order of the fields.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * The list of fields.
   */
  fieldList?: FieldContentValueFieldList[];
  static names(): { [key: string]: string } {
    return {
      sortOrder: 'SortOrder',
      fieldList: 'FieldList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sortOrder: 'number',
      fieldList: { 'type': 'array', 'itemType': FieldContentValueFieldList },
    };
  }

  validate() {
    if(Array.isArray(this.fieldList)) {
      $dara.Model.validateArray(this.fieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

