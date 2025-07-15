// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiSignaturesResponseBodyApiSignaturesApiSignatureItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 46fbb52840d146f186e38e8e70fc8c90
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The time when the backend signature key was bound.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The ID of the backend signature key.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  /**
   * @remarks
   * The name of the backend signature key.
   * 
   * @example
   * backendsignature
   */
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
  /**
   * @remarks
   * The returned signature key information. It is an array consisting of ApiSignatureItem data.
   */
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

