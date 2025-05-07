// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JudgeNodeMetaDesc extends $dara.Model {
  actualValue?: string;
  dataType?: number;
  field?: string;
  fieldType?: number;
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      dataType: 'DataType',
      field: 'Field',
      fieldType: 'FieldType',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      dataType: 'number',
      field: 'string',
      fieldType: 'number',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

