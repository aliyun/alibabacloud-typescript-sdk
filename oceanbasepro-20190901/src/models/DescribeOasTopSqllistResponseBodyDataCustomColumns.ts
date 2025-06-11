// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasTopSQLListResponseBodyDataCustomColumns extends $dara.Model {
  expression?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
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

