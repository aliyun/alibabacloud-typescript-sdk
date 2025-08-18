// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Certificate domain.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Certificate ID.
   * 
   * @example
   * 30000478
   */
  id?: string;
  /**
   * @remarks
   * Status of the certificate application.
   * 
   * @example
   * Applying
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      id: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @remarks
   * List of free certificate application details.
   */
  result?: ApplyCertificateResponseBodyResult[];
  /**
   * @remarks
   * Site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * Number of certificates applied for, which is the same as the number of input domains.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ApplyCertificateResponseBodyResult },
      siteName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

