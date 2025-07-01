// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh } from "./DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh";


export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh extends $dara.Model {
  autoRefresh?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh[];
  static names(): { [key: string]: string } {
    return {
      autoRefresh: 'AutoRefresh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefresh: { 'type': 'array', 'itemType': DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh },
    };
  }

  validate() {
    if(Array.isArray(this.autoRefresh)) {
      $dara.Model.validateArray(this.autoRefresh);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

