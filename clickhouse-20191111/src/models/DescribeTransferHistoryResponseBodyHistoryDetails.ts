// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail } from "./DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail";


export class DescribeTransferHistoryResponseBodyHistoryDetails extends $dara.Model {
  historyDetail?: DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail[];
  static names(): { [key: string]: string } {
    return {
      historyDetail: 'HistoryDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetail: { 'type': 'array', 'itemType': DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail },
    };
  }

  validate() {
    if(Array.isArray(this.historyDetail)) {
      $dara.Model.validateArray(this.historyDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

