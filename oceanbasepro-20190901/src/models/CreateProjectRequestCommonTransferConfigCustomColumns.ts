// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestCommonTransferConfigCustomColumns extends $dara.Model {
  columnName?: string;
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      expression: 'Expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      expression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

