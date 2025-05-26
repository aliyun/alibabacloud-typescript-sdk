// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInclinedTablesResponseBodyItemsTable } from "./DescribeInclinedTablesResponseBodyItemsTable";


export class DescribeInclinedTablesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The queried table.
   */
  table?: DescribeInclinedTablesResponseBodyItemsTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeInclinedTablesResponseBodyItemsTable },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

