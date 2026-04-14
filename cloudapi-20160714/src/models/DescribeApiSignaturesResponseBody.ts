// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem extends $dara.Model {
  apiId?: string;
  apiName?: string;
  boundTime?: string;
  signatureId?: string;
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponseBodyApiSignatures extends $dara.Model {
  apiSignatureItem?: DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem[];
  static names(): { [key: string]: string } {
    return {
      apiSignatureItem: 'ApiSignatureItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSignatureItem: { 'type': 'array', 'itemType': DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiSignatureItem)) {
      $dara.Model.validateArray(this.apiSignatureItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiSignaturesResponseBody extends $dara.Model {
  apiSignatures?: DescribeApiSignaturesResponseBodyApiSignatures;
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
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiSignatures: 'ApiSignatures',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSignatures: DescribeApiSignaturesResponseBodyApiSignatures,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiSignatures && typeof (this.apiSignatures as any).validate === 'function') {
      (this.apiSignatures as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

