// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem extends $dara.Model {
  count?: number[];
  /**
   * @example
   * r-bp1s1m8hwzrm77kfvz-db-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: { 'type': 'array', 'itemType': 'number' },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

