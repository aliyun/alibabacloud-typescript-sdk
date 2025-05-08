// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKeyPairsResponseBodyKeyPairs } from "./DescribeKeyPairsResponseBodyKeyPairs";


export class DescribeKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the key pairs.
   */
  keyPairs?: DescribeKeyPairsResponseBodyKeyPairs;
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
   * The number of entries returned per page.
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
   * 37B52F33-6879-49D0-A39B-22966B01449E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of key pairs.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyPairs: 'KeyPairs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairs: DescribeKeyPairsResponseBodyKeyPairs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.keyPairs && typeof (this.keyPairs as any).validate === 'function') {
      (this.keyPairs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

