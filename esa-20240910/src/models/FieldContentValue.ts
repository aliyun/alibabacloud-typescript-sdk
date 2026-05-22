// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldContentValueFieldList extends $dara.Model {
  fieldName?: string;
  description?: string;
  descriptionCn?: string;
  category?: string;
  dataType?: string;
  sortOrder?: number;
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

export class FieldContentValue extends $dara.Model {
  sortOrder?: number;
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

