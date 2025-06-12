// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllDataSourcesResponseBodyColumnsColumn } from "./DescribeAllDataSourcesResponseBodyColumnsColumn";


export class DescribeAllDataSourcesResponseBodyColumns extends $dara.Model {
  column?: DescribeAllDataSourcesResponseBodyColumnsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodyColumnsColumn },
    };
  }

  validate() {
    if(Array.isArray(this.column)) {
      $dara.Model.validateArray(this.column);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

