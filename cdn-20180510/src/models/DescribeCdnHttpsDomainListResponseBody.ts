// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnHttpsDomainListResponseBodyCertInfos } from "./DescribeCdnHttpsDomainListResponseBodyCertInfos";


export class DescribeCdnHttpsDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeCdnHttpsDomainListResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5E8DF64-7175-4186-9B06-F002C0BBD0C5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeCdnHttpsDomainListResponseBodyCertInfos,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.certInfos && typeof (this.certInfos as any).validate === 'function') {
      (this.certInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

