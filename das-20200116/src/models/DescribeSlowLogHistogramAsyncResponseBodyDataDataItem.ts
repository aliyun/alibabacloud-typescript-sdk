// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems } from "./DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems";


export class DescribeSlowLogHistogramAsyncResponseBodyDataDataItem extends $dara.Model {
  count?: number[];
  insItems?: DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems[];
  /**
   * @example
   * r-bp1hi0wg57s3n0i3n8-db-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      insItems: 'InsItems',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: { 'type': 'array', 'itemType': 'number' },
      insItems: { 'type': 'array', 'itemType': DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    if(Array.isArray(this.insItems)) {
      $dara.Model.validateArray(this.insItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

