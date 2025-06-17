// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem } from "./DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem";


export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData extends $dara.Model {
  dataItem?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.dataItem)) {
      $dara.Model.validateArray(this.dataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

