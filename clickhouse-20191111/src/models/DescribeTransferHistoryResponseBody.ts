// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTransferHistoryResponseBodyHistoryDetails } from "./DescribeTransferHistoryResponseBodyHistoryDetails";


export class DescribeTransferHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration information.
   */
  historyDetails?: DescribeTransferHistoryResponseBodyHistoryDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historyDetails: 'HistoryDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetails: DescribeTransferHistoryResponseBodyHistoryDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.historyDetails && typeof (this.historyDetails as any).validate === 'function') {
      (this.historyDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

