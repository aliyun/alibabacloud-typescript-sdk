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
   * The description of the field in English.
   * 
   * @example
   * IP address of the client.
   */
  description?: string;
  /**
   * @remarks
   * The description of the field in Chinese.
   */
  descriptionCn?: string;
  /**
   * @remarks
   * The category of the field.
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
   * The sequence number of the field.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * Indicates whether the field is available by default.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      description: 'Description',
      descriptionCn: 'DescriptionCn',
      category: 'Category',
      dataType: 'DataType',
      sortOrder: 'SortOrder',
      isDefault: 'IsDefault',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

