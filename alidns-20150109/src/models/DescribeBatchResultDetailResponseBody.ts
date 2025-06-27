// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBatchResultDetailResponseBodyBatchResultDetails } from "./DescribeBatchResultDetailResponseBodyBatchResultDetails";


export class DescribeBatchResultDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed results of the batch operation.
   */
  batchResultDetails?: DescribeBatchResultDetailResponseBodyBatchResultDetails;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchResultDetails: 'BatchResultDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResultDetails: DescribeBatchResultDetailResponseBodyBatchResultDetails,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.batchResultDetails && typeof (this.batchResultDetails as any).validate === 'function') {
      (this.batchResultDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

