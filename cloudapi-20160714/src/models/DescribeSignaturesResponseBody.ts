// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignaturesResponseBodySignatureInfosSignatureInfo extends $dara.Model {
  createdTime?: string;
  modifiedTime?: string;
  regionId?: string;
  signatureId?: string;
  signatureKey?: string;
  signatureName?: string;
  signatureSecret?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      signatureId: 'SignatureId',
      signatureKey: 'SignatureKey',
      signatureName: 'SignatureName',
      signatureSecret: 'SignatureSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      signatureId: 'string',
      signatureKey: 'string',
      signatureName: 'string',
      signatureSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignaturesResponseBodySignatureInfos extends $dara.Model {
  signatureInfo?: DescribeSignaturesResponseBodySignatureInfosSignatureInfo[];
  static names(): { [key: string]: string } {
    return {
      signatureInfo: 'SignatureInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureInfo: { 'type': 'array', 'itemType': DescribeSignaturesResponseBodySignatureInfosSignatureInfo },
    };
  }

  validate() {
    if(Array.isArray(this.signatureInfo)) {
      $dara.Model.validateArray(this.signatureInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

