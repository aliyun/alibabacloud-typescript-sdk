// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SenderStatisticsByTagNameAndBatchIDResponseBodyData } from "./SenderStatisticsByTagNameAndBatchIdresponseBodyData";


export class SenderStatisticsByTagNameAndBatchIDResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Data records
   */
  data?: SenderStatisticsByTagNameAndBatchIDResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      data: SenderStatisticsByTagNameAndBatchIDResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

