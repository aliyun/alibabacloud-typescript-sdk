// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColumnMetadata } from "./ColumnMetadata";


export class DescribeTableResponseBodyColumnList extends $dara.Model {
  columnList?: ColumnMetadata[];
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': ColumnMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

