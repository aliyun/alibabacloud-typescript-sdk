// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSignaturesResponseBodySignatureInfos } from "./DescribeSignaturesResponseBodySignatureInfos";


export class DescribeSignaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
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
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The returned signature information. It is an array consisting of SignatureInfo data.
   */
  signatureInfos?: DescribeSignaturesResponseBodySignatureInfos;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      signatureInfos: 'SignatureInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      signatureInfos: DescribeSignaturesResponseBodySignatureInfos,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.signatureInfos && typeof (this.signatureInfos as any).validate === 'function') {
      (this.signatureInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

