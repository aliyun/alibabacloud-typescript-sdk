// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTableStatisticsResponseBodyItemsTableStatisticRecords } from "./DescribeTableStatisticsResponseBodyItemsTableStatisticRecords";


export class DescribeTableStatisticsResponseBodyItems extends $dara.Model {
  tableStatisticRecords?: DescribeTableStatisticsResponseBodyItemsTableStatisticRecords[];
  static names(): { [key: string]: string } {
    return {
      tableStatisticRecords: 'TableStatisticRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableStatisticRecords: { 'type': 'array', 'itemType': DescribeTableStatisticsResponseBodyItemsTableStatisticRecords },
    };
  }

  validate() {
    if(Array.isArray(this.tableStatisticRecords)) {
      $dara.Model.validateArray(this.tableStatisticRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

