// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryInvalidAddressResponseBodyData } from "./QueryInvalidAddressResponseBodyData";


export class QueryInvalidAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * Next request starting position.
   * 
   * @example
   * 2
   */
  nextStart?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * Records.
   */
  data?: QueryInvalidAddressResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      requestId: 'string',
      totalCount: 'number',
      data: QueryInvalidAddressResponseBodyData,
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

